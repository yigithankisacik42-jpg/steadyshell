def check_balance():
    with open('lib/grammar-de-a1.ts', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    stack = []
    for i, line in enumerate(lines):
        line_num = i + 1
        for char in line:
            if char in '{[':
                stack.append((char, line_num))
            elif char in '}]':
                if not stack:
                    print(f"ERROR: Extra {char} at line {line_num}")
                    return
                top, top_line = stack.pop()
                if (top == '{' and char == ']') or (top == '[' and char == '}'):
                    print(f"ERROR: Mismatched {char} at line {line_num} (matches {top} from line {top_line})")
                    return
    
    if stack:
        for char, line_num in stack:
            print(f"ERROR: Unclosed {char} from line {line_num}")
    else:
        print("Braces and brackets are perfectly balanced. The error must be something else.")

check_balance()
