#!/usr/bin/python

"""
P2PU Python 101- Chapter 5 Exercises
"""

import sys

def exercise5_1():
  print '\nExercise 5.1 - Sum, Count and Average'
  numbers = []
  count = 0
  total = 0
  while True:
    line = raw_input('Enter a Number: ')
    if line == 'done':
      for i in numbers:
        count += 1
        total += i
      print count, total, total/count
      exercise5_2()
      break
    else:
      try:
        num = float(line)
        numbers.append(num)
        continue
      except ValueError:
        print 'ERROR, please enter a number'
        continue

def exercise5_2():
  print '\nExercise 5.2 Max and Min'
  numbers = []
  minum = None
  maxnum = None
  while True:
    line = raw_input('Enter a Number: ')
    if line == 'done':
      for i in numbers:
        if minum is None or minum > i:
          minum = i
        if maxnum is None or maxnum < i:
          maxnum = i
      print 'Max:',maxnum,'Min:',minum
      break
    else:
      try:
        num = float(line)
        numbers.append(num)
        continue
      except ValueError:
        print 'ERROR, please enter a number'
        continue

def main():
  exercise5_1()

if __name__ == '__main__':
  main()
