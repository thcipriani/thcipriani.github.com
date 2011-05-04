#!/usr/bin/python

def exercise9_1(file):
  wordKeys = {}
  count = 0
  try:
    f = open(file, 'rU')
    for line in f:
      words = line.split()
      for word in words:
        if word in wordKeys:
          continue
        else:
          wordKeys[word] = count
          count += 1
  except IOError:
    print 'Enter valid file name'
  for key in sorted(wordKeys.keys()):
    print key, wordKeys[key]
  exercise9_2()
    

def main():
  exercise9_1('words.txt')
  

if __name__ == '__main__':
  main()
