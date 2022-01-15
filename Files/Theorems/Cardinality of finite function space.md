<br />
<br />

Date Created: 14/01/2022 20:26:39
Categories: #Set_Theory 
Status: _Closed_
 
Lemmas: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ and $Y$ be finite sets. Then $\l|Y^X\r|=\l|Y\r|^{\l|X\r|}$.

--- admonition

_Proof_. Let $X=\l\{x_1,\dots,x_n\r\}$ and $Y=\l\{y_1,\dots,y_m\r\}$. For each $x_i$, there must be some $y_j\in Y$ such that $x_i\mapsto y_j$. There are $m$ many choices of $j$ corresponding to every $i$, of which there are $n$ many. Thus, in total, we have
$$\begin{equation}
    \underbrace{m\times\cdots\times m}_{\mathclap{n\mathrm{\ times}}}=m^n=\l|Y\r|^{\l|X\r|}
\end{equation}$$
many choices. These choices uniquely determine the graph of every function in $Y^X$, so the result follows.<span style="float:right;">$\blacksquare$</span>
