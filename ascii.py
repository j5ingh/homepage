import random
import re
import os

def randAscii():
    num = random.randrange(33, 127)
    ascii = str(chr(num))
    print("generated new ascii {}".format(ascii))
    return ascii

def updateJS(ascii):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    filename = "/sketch.js"
    file = open(dir_path + filename, "r")
    lines = file.readlines()
    file.close()
    print("read js")

    p = re.compile('.*let letter = "(.)".*')

    file = open(filename, "w")
    for line in lines:
        m = p.match(line)
        if m:
            line = 'let letter = "{}"\n'.format(ascii)
            print("updated asii from {} to {}. line is now:\n{}".format(m.group(1), ascii, line))
        file.write(line)
    file.close();
    print("wrote js")

if __name__ == '__main__':
    updateJS(randAscii())
