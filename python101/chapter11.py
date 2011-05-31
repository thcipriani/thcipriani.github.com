#!/usr/bin/python

"""
P2PU Python 101- Chapter 11 Exercises
"""
import re

def exercise11_1():
  print '\nExercise 11.1'
  count = 0
  f = open('mbox.txt','rU')

  regex = raw_input('Enter a regular expression: ')

  for line in f:
    line = line.rstrip()
    match = re.search(regex,line)
    if match:
      count += 1

  print 'mbox.txt had',count,'lines that matched',regex
  
  exercise11_2()

def exercise11_2():
  print '\nExercise 11.2'

  nums = []
  f = open('mbox.txt','rU')

  matches = re.findall(r'New\s*Revision\:\s+(\d+)',f.read())
  for match in matches:
    try:
      nums.append(float(match))
    except:
      print 'NaN'
  
  avg = sum(nums) / len(nums)
  print avg
  

def main():
  exercise11_1()

if __name__ == '__main__':
  main()
