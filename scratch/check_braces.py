import re

with open('lib/grammar-de-a1.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all unit declarations
units = re.findall(r'const (unit\d+Grammar): GermanGrammarUnit = \{', content)

for unit in units:
    print(f"Checking {unit}...")
    # Find start position
    start_match = re.search(f'const {unit}: GermanGrammarUnit = \\{{', content)
    if not start_match:
        print(f"  ERROR: Could not find start of {unit}")
        continue
    
    start_pos = start_match.start()
    
    # Find next unit or end of file
    next_unit_index = 1 + units.index(unit)
    if next_unit_index < len(units):
        next_unit = units[next_unit_index]
        end_match = re.search(f'const {next_unit}: GermanGrammarUnit = \\{{', content)
        end_pos = end_match.start()
    else:
        end_pos = len(content)
        
    block = content[start_pos:end_pos]
    
    open_braces = block.count('{')
    close_braces = block.count('}')
    open_brackets = block.count('[')
    close_brackets = block.count(']')
    
    print(f"  Braces: {open_braces} open, {close_braces} close")
    print(f"  Brackets: {open_brackets} open, {close_brackets} close")
    
    if open_braces != close_braces:
        print(f"  !!! BRACE MISMATCH in {unit} !!!")
    if open_brackets != close_brackets:
        print(f"  !!! BRACKET MISMATCH in {unit} !!!")
