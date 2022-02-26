<br />
<br />

Date Created: 04/02/2022 11:25:15
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,<\r\rangle$ be a totally ordered set. Then the order topology on $X$,_ $\mc{T}(<)=\mc{T}\l(\mc{B}\r)$ _where $\mc{B}\subseteq\pow\l(X\r)$ is such that_
* $\fa a,b\in X:a<b\Rightarrow\l(a,b\r)\in\mc{B}$_,_
* $\l(\ex a_0\in X:a_0\textit{ is a lower bound of }X\r)\Rightarrow\fa b:\l[a_0,b\r)\in\mc{B}$_, and_
* $\l(\ex b_0\in X:b_0\textit{ is an upper bound of }X\r)\Rightarrow\fa a:\l(a,b_0\r]\in\mc{B}$_,_

_is a topology on $X$._

```

_Proof_. It suffices to verify that $\mc{B}$ is a basis for a topology on $X$.
* ($\axibasis{1}$): There are four cases to consider.
    * If there exists a lower bound $a_0\in X$ but not an upper bound, then any other $x\neq a_0$ lies in $\l[a_0,y\r)$ where $y\in X$ is any element greater than $x$. The lower bound itself lies in $\l[a_0,b\r)$ for any $b\in X$.
    * Similarly if there exists an upper but not a lower bound in $X$.
    * If there exist both a lower bound $a_0\in X$ and an upper bound $b_0\in X$, then they lie in $\l[a_0,b\r)$ and $\l(a,b_0\r]$, respectively, for any $a,b\in X$. Any other $x\in X$ lies in $\l[a_0,y\r)$ where $y\in X$ such that $x<y<b_0$.
    * If $X$ is unbounded, then any $x\in X$ lies in $(y,z)$ where $y,z\in X$ and $y<x<z$.

* ($\axibasis{2}$): It suffices to show that the intersection of any two basis elements is again a basis element (or is empty).
    * Neither lower nor upper bounds: $\l(a,b\r)\cap\l(c,d\r)=\l(\max\l\{a,c\r\},\min\l\{b,d\r\}\r)$.
    * Lower bound only: $\l[a_0,b\r)\cap\l(c,d\r)=\l(c,\min\l\{b,d\r\}\r)$ and $\l[a_0,b\r)\cap\l[a_0,d\r)=\l[a_0,\min\l\{b,d\r\}\r)$.
    * Upper bound only: $\l(a,b_0\r]\cap\l(c,d\r)=\l(\max\l\{a,c\r\},d\r)$ and $\l(a,b_0\r]\cap\l(c,b_0\r]=\l(\max\l\{a,c\r\},b_0\r]$.
    * Both lower and upper bounds: $\l[a_0,b\r)\cap\l(a,b_0\r]=\l(\min\l\{a,b\r\},\max\l\{a,b\r\}\r)$.<span style="float:right;">$\blacksquare$</span>
