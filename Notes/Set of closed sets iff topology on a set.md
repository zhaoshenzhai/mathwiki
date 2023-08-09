---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/02/2022 14:36:08
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Consider a collection $\mc{T}\subseteq\pow\l(X\r)$ and define $\mc{F}\coloneqq\l\{C\in\pow\l(X\r)\st X\comp C\in\mc{T}\r\}$. If $\mc{T}$ is a topology on $X$, then
* $\em\in\mc{F}$ and $X\in\mc{F}$.
* Arbitrary intersections of elements of $\mc{F}$ are in $\mc{F}$.
* Finite unions of elements of $\mc{F}$ are in $\mc{F}$.

Conversely, consider a collection $\mc{F}\subseteq\pow\l(X\r)$ and define $\mc{T}\coloneqq\l\{U\in\pow\l(X\r)\st X\comp U\in\mc{F}\r\}$. If the above hold for $\mc{F}$, then $\mc{T}$ is a topology on $X$.

```

<b>Remark.</b> This allows us to instead define a topology on $X$ as a collection of subsets $\mc{F}\subseteq\pow\l(X\r)$ satisfying the above axioms; its elements are called closed sets. The original definition can then be recovered by defining $\mc{T}\coloneqq\l\{U\in\pow\l(X\r)\st X\comp U\in\mc{F}\r\}$, that is, by defining open sets as relative complements of closed sets.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take any $\mc{C}\subseteq\mc{F}$ and $\mc{U}\subseteq\mc{T}$. We need the following two lemmas:
$$\begin{equation}
    \begin{alignedat}{2}
        \l\{X\comp C\st C\in\mc{C}\r\}&=\l\{U\in\pow\l(X\r)\st\ex C\in\mc{C}:U=X\comp C\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of set of relative complements}\\
        &=\l\{U\in\pow\l(X\r)\st\ex C\in\mc{C}:X\comp U=C\r\}&&C\subseteq X\textrm{ and }X\comp U=X\comp\l(X\comp C\r)=C\\
        &=\l\{U\in\pow\l(X\r)\st X\comp U\in\mc{C}\r\}&&\textrm{Substitution}\\
        &\subseteq\mc{T}.&&\mc{C}\subseteq\mc{F}
    \end{alignedat}\cref{1}
\end{equation}$$
$$\begin{equation}
    \begin{alignedat}{2}
        \l\{X\comp U\st U\in\mc{U}\r\}&=\l\{C\in\pow\l(X\r)\st\ex U\in\mc{U}:C=X\comp U\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of set of relative complements}\\
        &=\l\{C\in\pow\l(X\r)\st\ex U\in\mc{U}:X\comp C=U\r\}&&U\subseteq X\textrm{ and }X\comp C=X\comp\l(X\comp U\r)=U\\
        &=\l\{C\in\pow\l(X\r)\st X\comp C\in\mc{U}\r\}&&\textrm{Substitution}\\
        &\subseteq\mc{F}.&&\mc{U}\subseteq\mc{T}
    \end{alignedat}\cref{2}
\end{equation}$$
* ($\Rightarrow$): Assume that $\mc{T}$ satisfies the axioms of a topological space, so $\mc{F}$ is the set of closed sets of $X$. Observe that $X\comp\em=X\in\mc{T}$, so $\em\in\mc{F}$. Similarly, we have $X\comp X=\em\in\mc{T}$ and thus $X\in\mc{F}$. Now, take a non-empty collection $\mc{C}\subseteq\mc{F}$. Using De Morgan’s Laws, we see that
$$\begin{equation}
    X\comp\bigcap\mc{C}=\bigcup\underbrace{\l\{X\comp C\st C\in\mc{C}\r\}}_{\mathclap{\subseteq\mc{T}\textrm{ from (1)}}}\in\mc{T}\ \ \ \ \Rightarrow\ \ \ \ \bigcap\mc{C}\in\mc{F}.
\end{equation}$$
Finally, take a finite collection $\mc{C}\subseteq\mc{F}$. If $\mc{C}=\em$, then $\bigcup\mc{C}=\em\in\mc{F}$. Otherwise, using De Morgan’s Laws, we see that$$\begin{equation}
            X\comp\bigcup\mc{C}=\bigcap\underbrace{\l\{X\comp C\st C\in\mc{C}\r\}}_{\mathclap{\subseteq\mc{T}\textrm{ from (1)}}}\in\mc{T}\ \ \ \ \Rightarrow\ \ \ \ \bigcup\mc{C}\in\mc{F}.
        \end{equation}$$
* ($\Leftarrow$): Assume that $\mc{F}$ satisfies the three axioms above. Observe that $X\comp\em=X\in\mc{F}$, so $\em\in\mc{T}$. Similarly, we have $X\comp X=\em\in\mc{F}$ and thus $X\in\mc{T}$. Now, take a collection $\mc{U}\subseteq\mc{T}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}$. Otherwise, using De Morgan’s Laws, we see that
$$\begin{equation}
    X\comp\bigcup\mc{U}=\bigcap\underbrace{\l\{X\comp U\st U\in\mc{U}\r\}}_{\mathclap{\subseteq\mc{F}\textrm{ from (2)}}}\in\mc{F}\ \ \ \ \Rightarrow\ \ \ \ \bigcup\mc{U}\in\mc{T}.
\end{equation}$$
Finally, take a non-empty finite collection $\mc{U}\subseteq\mc{T}$. Using De Morgan’s Laws, we see that
$$\begin{equation}
    X\comp\bigcap\mc{U}=\bigcup\underbrace{\l\{X\comp U\st U\in\mc{U}\r\}}_{\mathclap{\subseteq\mc{F}\textrm{ from (2)}}}\in\mc{F}\ \ \ \ \Rightarrow\ \ \ \ \bigcap\mc{U}\in\mc{T}.\qedin
\end{equation}$$
