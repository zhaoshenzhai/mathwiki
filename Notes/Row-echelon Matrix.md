<br />
<br />

Date Created: 24/03/2022 13:42:23
Tags: #Definition #Closed 

Types: [[Reduced Row-echelon Matrix]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Gaussian Algorithm]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. A matrix $\v{R}\in\mat{m\times n}{K}$ is said to be in **row-echelon form** if:_
* $\axiref[1]\bf{.}$ _All zero-rows of $\v{R}$ are at the bottom:_
$$\begin{equation}
    \begin{aligned}
        \ex r\in\l\{0,\dots,m\r\}:\l[\l(\fa i\in\l\{1,\dots,r\r\},\ex j:R_{ij}\neq0\r)\land\l(\fa i\in\l\{r+1,\dots,m\r\},\fa j:R_{ij}=0\r)\r]. && \l(j\in\l\{1,\dots,n\r\}\r)
    \end{aligned}
\end{equation}$$
* $\axiref[2]\bf{.}$ _For every non-zero row $i\in\l\{1,\dots,r\r\}$ of $\v{R}$, the first non-zero entry from the left, called the **leading entry of $i$** and whose column is called the **leading column**, is $1$:_
$$\begin{equation}
    \begin{aligned}
        \fa i\in\l\{1,\dots,r\r\}:R_{ik_i}=1. && \l(k_i\coloneqq\min\l\{j\in\l\{1,\dots,n\r\}\mid R_{ij}\neq0\r\}\r)
    \end{aligned}
\end{equation}$$
* $\axiref[3]\bf{.}$ _For every non-zero row $i\in\l\{1,\dots,r\r\}$ of $\v{R}$ with its leading entry in column $k_i$, we have $k_1<\cdots<k_r$:_
$$\begin{equation}
    \begin{aligned}
        \fa i\in\l\{1,\dots,r-1\r\}:k_i<k_{i+1}. && \l(k_i\coloneqq\min\l\{j\in\l\{1,\dots,n\r\}\mid R_{ij}\neq0\r\}\r)
    \end{aligned}
\end{equation}$$

```
