<br />
<br />

Date Created: 21/01/2022 10:54:56 %%auto_aliasing%%
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a set. Then $R$ is a binary relation iff there exist sets $X$ and $Y$ such that $R\subseteq X\times Y$._

```

_Proof_. ($\Rightarrow$): Let $X\coloneqq\dom R$ and $Y\coloneqq\ran R$; we claim that $R\subseteq\dom R\times\ran R$. To do so, take $u\in R$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        u\in R&\Leftrightarrow\ex x,y:u=\l\langle x,y\r\rangle&&\textrm{Definition of binary relation}\\
        &\Rightarrow x\in\dom R\land y\in\ran R&&\textrm{Definition of domain and range}\\
        &\Rightarrow\ex x\in\dom R,\ex y\in\ran R:u=\l\langle x,y\r\rangle\ \ \ \ \ \ \ \ &&\textrm{Quantification within sets}\\
        &\Leftrightarrow u\in\dom R\times\ran R.&&\textrm{Definition of Cartesian product}
    \end{alignedat}
\end{equation}$$
($\Leftarrow$): Assume that $\ex X,\ex Y:R\subseteq X\times Y$. The result follows from the following chain of implications:
$$\begin{alignat}{2}
    \ex X,\ex Y:R\subseteq X\times Y&\Leftrightarrow\ex X,\ex Y,\fa u\in R:u\in X\times Y&&\textrm{Definition of subset}\\
    &\Leftrightarrow\ex X,\ex Y,\fa u\in R:\l(\ex x\in X,\ex y\in Y:u=\l\langle x,y\r\rangle\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of Cartesian product}\\
    &\Rightarrow\fa u\in R:\ex x,\ex y:u=\l\langle x,y\r\rangle.&&\textrm{Existential instantiation}\qedin
\end{alignat}$$
