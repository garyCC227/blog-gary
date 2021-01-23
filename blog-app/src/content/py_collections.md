# Python Collection Module

## 1. Default dict methods

|Method  |Description  |
|:------:|:-------------|
`clear()`|	Removes all the elements from the dictionary
`copy()`	|Returns a copy of the dictionary
`fromkeys()`	|Returns a dictionary with the specified keys and value |
`get(key[,default])`	|Returns the value of the specified key, if default is not given, it defaults to `None`
`items()`	|Returns a list containing a tuple for each key value pair
`keys()`	|Returns a list containing the dictionary's keys
`pop(key[, default])`	|Removes the element with the specified key
`popitem()`	|Removes the last inserted key-value pair
`setdefault(key[,default])`	|Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
`update([other])`	|Updates the dictionary with the specified key-value pairs;update() accepts either another dictionary object or an iterable of key/value pairs (as tuples or other iterables of length two). If keyword arguments are specified, the dictionary is then updated with those key/value pairs: d.update(red=1, blue=2)
`values()`	|Returns a list of all the values in the dictionary
`list(d)`|return a list of all the keys
`len(d)`| return the number of items in the dictionary
`key in d` | return `True` if *d* has a key *key*, else `False` 
`iter(d)` | == `iter(d.keys())`
`reversed(d)` | == `reversed(d.keys())` : iterator of the keys


>- **dict.fromkeys()**
>>```Python
>>x = ('key1', 'key2', 'key3')
>>dict.fromkeys(x)
>>#{'key1': None, 'key2': None, 'key3': None}
>>```

>- **`|` Union**(python 3.9). If a key appears in both operands, the last-seen value (i.e. that from the right-hand operand) wins 
>>```Python
>>> d = {'spam': 1, 'eggs': 2, 'cheese': 3}
>>> e = {'cheese': 'cheddar', 'aardvark': 'Ethel'}
>>> d | e
>>{'spam': 1, 'eggs': 2, 'cheese': 'cheddar', 'aardvark': 'Ethel'}
>>> e | d
>>{'cheese': 3, 'aardvark': 'Ethel', 'spam': 1, 'eggs': 2}
>>```

- `|=`(python 3.9)
```Python
>>> d |= e
>>> d
{'spam': 1, 'eggs': 2, 'cheese': 'cheddar', 'aardvark': 'Ethel'}
```

# 2. Collections - Table of Contents 
Will talk about the following collections
- Counter
- defaultDict
- OrderedDict
- 
## 3. Counter
#### 3.1 Definition:
A `Counter` is a `dict` subclass for counting hashable objects. key as element, value as counts.
Counts are allowed to be any integer value including zero or negative counts.

#### 3.2 Initialization 1
> ```Python
>c = Counter('gallahad')                # a new counter from an iterable
>#Counter({'g': 1, 'a': 3, 'l': 2, 'h': 1, 'd': 1})
>c = Counter({'red': 4, 'blue': 2})     # a new counter from a mapping
># c: Counter({'red': 4, 'blue': 2})
>c = Counter(cats=4, dogs=8)            # a new counter from keyword args
># c: Counter({'cats': 4, 'dogs': 8})
>```

#### 3.3 Initialization 2
>```Python
>c = Counter(['eggs', 'ham'])
>c['bacon']                              # count of a missing element is zero
># 0
>```

#### 3.4 deletion:
>Setting a count to zero does not remove an element from a counter. Use del to remove it entirely:
>```Python
>c['sausage'] = 0                        # counter entry with a zero count
>del c['sausage]
>```

####  3.5 methods
- `elements()`
>```Python
>c = Counter(a=4, b=2, c=0, d=-2)
>sorted(c.elements())
>#['a', 'a', 'a', 'a', 'b', 'b']
>```

- `most_common([n])` : return a list of the n most common elements and their counts from the most common to the least, if *n* is ommitted or `None`, it will return all elements
>```Python
>Counter('aaabbcc').most_common(2)
>#[('a', 3), ('b', 2)]
>```

- `subtract()`
>```Python
>a = Counter('aaabbcc')
>b = Counter('abc')
>a.subtract(b)
> #Counter({'a': 2, 'b': 1, 'c': 1})
>```

- `fromkeys(iterable)` not implemented
- `update(iterable-or-mapping)` like `dict.update()`, add counts instead of replacing them; Also expect to be a sequence of elements, not a sequence of `(key, value)` paris.
- Unary addition and subtraction are shortcuts for adding an empty counter or subtracting from an empty counter.
```Python
c = Counter(a=2, b=-4)
+c
#Counter({'a': 2})
-c
#Counter({'b': 4})
```

##### Note: Only use `Counter` for postive counts

![Counter](https://raw.githubusercontent.com/garycc227/blog-img/main/py-collection/counter.PNG)
## 4. defaultdict

#### 4.1 definition
`defaultdict([default_factory])` is a subclass of the built-in `dict` class. It overrides one method and adds one writable instance variable. The remaining functionality is the same as for the `dict` class.

The first argument provides the initial value for the `default_factory` attribute; it defaults to `None`. All remaining arguments are treated the same as if they were passed to the `dict` constructor, including keyword arguments.


#### 4.2 default_factory
`defaultdict` is similar to `dict`, but it has `default_factory` to set the default value for key;
`defaultdict` has to be a `func`

![Counter](https://raw.githubusercontent.com/garycc227/blog-img/main/py-collection/defaultdict.PNG)
## 5.OrderedDict([items])

##### 5.1 definition 
`dict` with specific order, LIFO(`last=True`) or FIFO for `popitem` and `move_to_end`

##### 5.2 method
- `popitem(last=True)` 
- `move_to_end(key, last=True)`
```Python 
d = OrderedDict.fromkeys('abcd')
d.move_to_end('a')
''.join(d.keys()) #bcda

d.move_to_end('a', last=False)
''.join(d.keys()) #abcd
```

- support `reversed`
- support `|` merge and `|=` update
![ordereddict](https://raw.githubusercontent.com/garycc227/blog-img/main/py-collection/ordereddict.PNG)
