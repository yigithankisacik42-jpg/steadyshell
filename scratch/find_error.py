import subprocess
import os

with open('lib/grammar-de-a1.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def check_syntax(n):
    # Minimal imports and interfaces needed for units to be valid
    preamble = [
        'import { GrammarRule, GrammarExercise } from "./grammar";\n',
        'export interface GermanGrammarUnit {\n',
        '    unitId: number;\n',
        '    title: string;\n',
        '    rules: GrammarRule[];\n',
        '    exercises: GrammarExercise[];\n',
        '}\n'
    ]
    
    test_content = "".join(preamble + lines[:n])
    # Close any potential open object at the end if it's incomplete
    # But for line-by-line check, we want to know where it breaks.
    
    with open('lib/grammar_test.ts', 'w', encoding='utf-8') as f:
        f.write(test_content)
    
    res = subprocess.run(['npx', 'tsc', 'lib/grammar_test.ts', '--noEmit', '--esModuleInterop', '--target', 'es2020', '--skipLibCheck'], capture_output=True, shell=True)
    return res.returncode == 0

# Start binary search between 10 and the end
low = 10
high = len(lines)
last_valid = low

print(f"Starting binary search between {low} and {high}...")

while low <= high:
    mid = (low + high) // 2
    if check_syntax(mid):
        last_valid = mid
        low = mid + 1
    else:
        high = mid - 1

print(f"First line that CAUSES an error: {last_valid + 1}")
print(f"Last valid line count: {last_valid}")

# Show the area around the first error
start = max(0, last_valid - 2)
end = min(len(lines), last_valid + 3)
for i in range(start, end):
    mark = "!!!" if i == last_valid else "   "
    print(f"{mark} {i+1}: {lines[i].strip()}")
