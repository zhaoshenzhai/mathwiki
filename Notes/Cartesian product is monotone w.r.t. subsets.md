<div class="topSpace"></div>

Date Created: 21/01/2022 18:55:03
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $A,B,C,D$ be sets. Then $A\subseteq C$ and $B\subseteq D$ iff $A\times B\subseteq C\times D$.

```

<i>Proof.</i>
* ($\Rightarrow$): Take $x\in A\times B$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        x\in A\times B&\Leftrightarrow\ex a\in A,\ex b\in B:x=\tpl{a,b}\ \ \ \ \ \ \ \ &&\textrm{Definition of Cartesian product}\\
        &\Rightarrow\ex a\in C,\ex b\in D:x=\tpl{a,b}&&\textrm{Definition of subset}\\
        &\Leftrightarrow x\in C\times D.&&\textrm{Definition of Cartesian product}
    \end{alignedat}
\end{equation}$$
* ($\Leftarrow$): Take $a\in A$ and $b\in B$. It follows that $\tpl{a,b}\in A\times B$ and thus $\tpl{a,b}\in C\times D$. By definition, we have that $a\in C$ and $b\in D$, and thus $A\subseteq C$ and $B\subseteq D$.<span style="float:right;">$\blacksquare$</span>
