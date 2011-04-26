#!/usr/bin/python

"""
P2PU Python 101- Chapter 2 Exercises
"""
def exercise2_1():
  print '\nExercise 2.1'
  print '>>>5\n5'
  print '>>>x = 5'
  print '>>>x + 1\n6'
  exercise2_2()

def exercise2_2():
  print '\nExercise 2.2'
  name = raw_input('Enter your name: ')
  print 'Hello',name
  exercise2_3()

def exercise2_3():
  print '\nExercise 2.3'
  while True:
    try:
      hours = float(raw_input('Enter Hours: '))
      rate = float(raw_input('Enter Rate: '))
      break
    except ValueError:
      print 'Please enter all values as numbers'
  print 'Pay:','%.2f' % round(hours * rate, 2)
  exercise2_4()

def exercise2_4():
  print '\nExercise 2.4'
  print 'width = 17\nheight = 12.0'
  print 'width/2 = 8 - type = int'
  print 'height/3 = 4.0 - type = float'
  print '1 + 2 * 5 = 11 - type = int'
  exercise2_5()

def exercise2_5():
  print '\nExercise 2.5'
  while True:
    try:
      celsius = float(raw_input('Enter Temp in Celsius: '))
      break
    except ValueError:
      print 'Please enter degrees Celsius using numbers only'
  print 'Degrees Fahrenheit:',celsius * 1.8 + 32,'\n\n'
  

def main():
  exercise2_1()

if __name__ == '__main__':
  main()
