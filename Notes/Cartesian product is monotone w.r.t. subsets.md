<br />
<br />

Date Created: 21/01/2022 18:55:03
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A,B,C,D$ be sets. If $A\subseteq C$ and $B\subseteq D$, then $A\times B\subseteq C\times D$. The converse is true if $A,B\neq\em$._

```

_Proof_. ($\Rightarrow$): Take $x\in A\times B$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        x\in A\times B&\Leftrightarrow\ex a\in A,\ex b\in B:x=\l\langle a,b\r\rangle\ \ \ \ \ \ \ \ &&\textrm{Definition of Cartesian product}\\
        &\Rightarrow\ex a\in C,\ex b\in D:x=\l\langle a,b\r\rangle&&\textrm{Definition of subset}\\
        &\Leftrightarrow x\in C\times D.&&\textrm{Definition of Cartesian product}
    \end{alignedat}
\end{equation}$$
($\Leftarrow$): Assume that $A,B\neq\em$, so take $a\in A$ and $b\in B$. It follows that $\l\langle a,b\r\rangle\in A\times B$ and thus $\l\langle a,b\r\rangle\in C\times D$. By definition, we have that $a\in C$ and $b\in D$, and thus $A\subseteq C$ and $B\subseteq D$.<span style="float:right;">$\blacksquare$</span>
