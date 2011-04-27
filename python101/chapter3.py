#!/usr/bin/python

"""
P2PU Python 101- Chapter 3 Exercises
"""

import sys

def exercise3_1():
  print '\nExercise 3.1'
  hours = float(raw_input('Enter Hours: '))
  rate = float(raw_input('Enter Rate: '))
  total = round(hours * rate, 2)
  if hours > 40:
    overtime = hours - 40
    otRate = rate * 1.5
    total = overtime * otRate + rate * 40
  print 'Pay:','%.2f' % total
  exercise3_2()

def exercise3_2():
  print '\nExercise 3.2'
  hours = raw_input('Enter Hours: ')
  try:
    hours = float(hours)
  except:
    print 'Error, Please enter numeric input'
    sys.exit() ##To stop script execution on error

  rate = raw_input('Enter Rate: ')
  try:
    rate = float(rate)
  except:
    print 'Error, Please enter numeric input'
    sys.exit()

  print 'Pay:','%.2f' % round(hours * rate, 2)
  exercise3_3()

def exercise3_3():
  print '\nExercise 3.3'
  while True:
    try:
      score = float(raw_input('Enter Score: '))
    except ValueError:
      print 'Error, Please enter numeric input'
      continue
    if score > 1 or score < 0:
      print 'Error, Enter a score between 0 and 1'
      continue
    else:
      break
  if score > .9:
    print 'A'
  if score > .8:
    print 'B'
  if score > .7:
    print 'C'
  if score > .6:
    print 'D'
  if score < .6:
    print 'F'

def main():
  exercise3_1()

if __name__ == '__main__':
  main()
