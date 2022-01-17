<br />
<br />

Date Created: 14/01/2022 18:03:54
Categories: #Set_Theory 
Status: _Next_ 

Requires: _Not Applicable_

Types: _Not Applicable_
Examples: _Not Applicable_ 
Properties: _Not Applicable_
Constructions: [[Binary Relation]]
Generalizations: [[Cartesian Product (Arbitrary)]]

!!! ad-Definition Definition.

Let $X$ and $Y$ be sets. The **Cartesian product of $X$ and $Y$** is the set
$$\begin{equation}
    X\times Y\coloneqq\l\{w\in\ms{P}\ms{P}\l(X\cup Y\r)\mid\l(\ex x\in X\r)\l(\ex y\in Y\r)w=\l\langle x,y\r\rangle\r\}.
\end{equation}$$

--- admonition

_Proof_. (that $\l\langle x,y\r\rangle\in\ms{P}\ms{P}\l(X\cup Y\r)$): Since $x\in X$ and $y\in Y$, we see that $x,y\in X\cup Y$. From the Axiom of Pairing, $\l\{x\r\}$ and $\l\{x,y\r\}$ are sets, both of which are subsets of $X\cup Y$. Hence both $\l\{x\r\}$ and $\l\{x,y\r\}$ are elements of $\ms{P}\l(X\cup Y\r)$. Again by the Axiom of Pairing, we have $\l\{\l\{x\r\},\l\{x,y\r\}\r\}\subseteq\ms{P}\l(X\cup Y\r)$, and so $\l\{\l\{x\r\},\l\{x,y\r\}\r\}\in\ms{P}\ms{P}\l(X\cup Y\r)$.<span style="float:right;">$\blacksquare$</span>
