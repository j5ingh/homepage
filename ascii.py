import random
import re

def randAscii():
    num = random.randrange(33, 127)
    ascii = str(chr(num))
    return ascii

def updateJS(ascii):
    filename = "sketch.js"
    file = open(filename, "r")
    lines = file.readlines()
    file.close()

    p = re.compile('.*let letter = "(.)".*')

    file = open(filename, "w")
    for line in lines:
        m = p.match(line)
        if m:
            line = f'let letter = "{ascii}"\n'
        file.write(line)
    file.close();

if __name__ == '__main__':
    updateJS(randAscii())
