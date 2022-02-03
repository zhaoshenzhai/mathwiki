<br />
<br />

Date Created: 27/01/2022 10:41:34
Tags: #Proposition #Closed 

Proved by: [[Criteria for equality of functions]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $f:X\to Y$. Then $f\circ\id_X=f$ and $\id_Y\circ f=f$. In other words, the diagram_
<center><img src="https://i.upmath.me/svg/%0A%5Cdefinecolor%7BtextColor%7D%7Brgb%7D%7B0.973%2C%200.973%2C%201%7D%0A%5Cdefinecolor%7BbgColor%7D%7Brgb%7D%7B0.3%2C%200.3%2C%200.3%7D%0A%5Cdefinecolor%7BbgColorAD%7D%7BRGB%7D%7B18%2C%2019%2C%2023%7D%0A%5Cbegin%7Btikzcd%7D%5Bcolor%3DtextColor%2C%20background%20color%3DbgColorAD%5D%0AX%20%5Carrow%5Br%2C%20%22%5Coperatorname%7Bid%7D_X%22%5D%20%5Carrow%5Brr%2C%20%22f%22'%2C%20bend%20right%5D%20%26%20X%20%5Carrow%5Br%2C%20%22f%22%20description%5D%20%5Carrow%5Brr%2C%20%22f%22%2C%20bend%20left%5D%20%26%20Y%20%5Carrow%5Br%2C%20%22%5Coperatorname%7Bid%7D_Y%22'%5D%20%26%20Y%0A%5Cend%7Btikzcd%7D%0A"/></center>

_commutes._

--- admonition

_Proof_. Observe that
$$\begin{equation}
    \dom f=\dom\l(f\circ\id_X\r)=\dom\l(\id_Y\circ f\r)=X,
\end{equation}$$
so take $x\in X$. Compute
$$\begin{equation}
    \l(f\circ\id_X\r)\l(x\r)=f\l(\id_X\l(x\r)\r)=f\l(x\r)\ \ \ \ \textrm{and}\ \ \ \ \l(\id_Y\circ f\r)\l(x\r)=\id_X\l(f\l(x\r)\r)=f\l(x\r),
\end{equation}$$
so $f\l(x\r)=\l(f\circ\id_X\r)\l(x\r)=\l(\id_Y\circ f\r)\l(x\r)$ for all $x$ in their common domain.<span style="float:right;">$\blacksquare$</span>
