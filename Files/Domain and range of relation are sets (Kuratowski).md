<br />
<br />

Date Created: 20/01/2022 07:45:41
Tags: #Proposition #Closed 

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $R$ be a binary relation. Then there exists a unique set $z_1$ whose elements are exactly the sets $x$ for which there exists some $y$ such that $xRy$. Similarly, there exists a unique set $z_2$ whose elements are exactly the sets $y$ for which there exists some $x$ such that $xRy$. Formally,
$$\begin{equation}
    \begin{gathered}
        \fa R\ex!z_1\fa x\l(x\in z_1\Leftrightarrow\ex y:xRy\r)\\
        \fa R\ex!z_2\fa y\l(y\in z_2\Leftrightarrow\ex x:xRy\r).
    \end{gathered}
\end{equation}$$

--- admonition

_Proof_. We shall prove the statement for $z_1$; the proof for $z_2$ is analogous. Let $\phi\l(x\r)$ denote the formula $\ex y:xRy$; we claim that
$$\begin{equation}
    \phi\l(x\r)\Rightarrow x\in\bigcup\bigcup R.
\end{equation}$$
To this end, assume that there exists some $y$ such that $\l\langle x,y\r\rangle\in R$. By definition of the ordered pair, we have $\l\{\l\{x\r\},\l\{x,y\r\}\r\}\in R$. It follows that $\l\{x,y\r\}\in\bigcup R$ and hence $x,y\in\bigcup\bigcup R$. (Incidently, this also proves the statement for $z_2$).<span style="float:right;">$\blacksquare$</span>
