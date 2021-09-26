# Scala

---

## Overview
---
Scala is statically typed modern programming language. Scala allows for _both_ object-oriented and functional programming (it is **multi-paradigm**). Scala was created with the purpose of taking a concise, elegant, and type-safe approach to common programming patterns. Scala is used is many different application settings, including [Spark](https://makeuseofdata.com/programming/frameworks/apache_spark/index.html) and for Web Development. Like many other languages, Scala interoperates with other languages, specifically [Java](https://makeuseofdata.com/programming/languages/java/index.html). {cite}`scala_into`

## Basic Syntax
### Variable Types
In Scala, there are two types of variables and each is created differently. Immutable variables (variables that cannot be changed) are created using `val` while mutable variables (variables whose value will change) are created using using `var`. In Scala, you should use immutable variables unless your variable's value will change. An example of each type of variable is shown below:
```scala
val msg1 = "Hello, World!"  // immutable variable
var msg2 = "Hello, World!" // mutable variable
```
If you try to reassign (change the value of) an immutable Scala variable, you will face a compiler error:
```scala
msg1 = "Aloha, World" // Will _not_ work!
```
However, mutable Scala variables can be changed:
```scala
msg2 = "Aloha, World" // Will work!
```
### Variable Type Declaration
In Scala, you can be explict and state a variable's type or be implict and let the complier infer the variable type:
```scala
val x: Int = 2 // Explict
val x = 2 // Implict
```
Scala suggests preferring implict assignment, which Scala says is less verbose. If you use the implict approach, Scala considers the `Int` and `Double` the default numeric types:
```scala
val x = 2 // An `Int`
val x = 2.345 // A `Double`
```
You may use `L`, `D`, and `F` (and their lowercase verisons) to explictly specify the type of values in Scala:
```scala
val i = 2_000L // val i: Long = 2000
val j = 3.14D // val j: Double = 3.14
val k = 2.71F // val k: Float = 2.71
```
For really large numbers, use `BigInt` and `BigDecimal`:
```scala
val x = BigInt(2718281828)
val y = BigDecimal(314159265.35)
```
Use `BigDecimal` for precise arithmetic, as `Double` and `Float` are approximations.

In addition, Scala offers `String` and `Char` data types:
```scala
val msg = "Hello, World!" // A `String`
val m = 'H' // A `Char`
```
For multiline string, use three double-qoutes {cite}`scala_vars`:
```scala
val book_title = """
Programming in Scala:
A Comprehensive Step-by-Step Guide
"""
```
---

## Sources

```{bibliography} references.bib
:filter: docname in docnames
:style: plain
```

---

Contributions made by our wonderful GitHub Contributors: [@madisonestabrook](https://github.com/madisonestabrook)