<br />
<br />

Date Created: 16/01/2022 15:26:07
Categories: #Set_Theory
Status: _Open_ 

Requires: _Not Applicable_

Types: _Not Applicable_
Examples: _Not Applicable_ 
Properties: [[Set-builder notation is unique]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Definition Definition.

Let $\phi\l(x\r)$ be a formula and $z$ be a set such that $\fa x\l[x\in z\Leftrightarrow\phi\l(x\r)\r]$. Then $\phi\l(x\r)$ is called the **intension of $z$**, in which case the set $z$ is denoted by $\l\{x\mid\phi\l(x\r)\r\}$.

--- admonition

**Remark.** If $\phi\l(x\r)$ can be written as $x\in v\land\psi\l(x\r)$ for some set $v$ and formula $\psi\l(x\r)$, denote $\l\{x\mid\phi\l(x\r)\r\}$ by the expression $\l\{x\in v\mid\psi\l(x\r)\r\}$. If $\psi\l(x\r)$ is not free in $z$, Specification asserts that there exists some set $z$ satisfying $\fa x\l[x\in z\Leftrightarrow\l(x\in v\land\psi\l(x\r)\r)\r]$, that is, the expression $\l\{x\in v\mid\psi\l(x\r)\r\}$ is a set.<span style="float:right;">$\blacklozenge$</span>
