<br />
<br />

Date Created: 19/02/2022 14:36:08
Tags: #Proposition #Closed

Proved by: [[Double complement of set is set itself]], [[De Morgan's Laws]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. Consider a collection $\mc{T}\subseteq\pow\l(X\r)$ and define $\mc{F}\coloneqq\l\{C\in\pow\l(X\r)\mid X\comp C\in\mc{T}\r\}$. If $\mc{T}$ is a topology on $X$, then_
* ($\axitopcl[1]$): _$\em\in\mc{F}$ and $X\in\mc{F}$._
* ($\axitopcl[2]$): _Arbitrary intersections of elements of $\mc{F}$ are in $\mc{F}$: $\fa\mc{C}\subseteq\mc{F}:\mc{C}\neq\em\Rightarrow\bigcap\mc{C}\in\mc{F}$._
* ($\axitopcl[3]$): _Finite unions of elements of $\mc{F}$ are in $\mc{F}$: $\fa\mc{C}\subseteq\mc{F}:\mc{C}\textit{ is finite}\Rightarrow\bigcup\mc{C}\in\mc{F}.$_

_Conversely, consider a collection $\mc{F}\subseteq\pow\l(X\r)$ and define $\mc{T}\coloneqq\l\{U\in\pow\l(X\r)\mid X\comp U\in\mc{F}\r\}$. If $\axitopcl[1]$ to $\axitopcl[3]$ hold for $\mc{F}$, then $\mc{T}$ is a topology on $X$._

```

_Proof_. Take any $\mc{C}\subseteq\mc{F}$ and $\mc{U}\subseteq\mc{T}$. We need the following two lemmas:
$$\begin{equation}
    \begin{alignedat}{2}
        \l\{X\comp C\mid C\in\mc{C}\r\}&=\l\{U\in\pow\l(X\r)\mid\ex C\in\mc{C}:U=X\comp C\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of set of relative complements}\\
        &=\l\{U\in\pow\l(X\r)\mid\ex C\in\mc{C}:X\comp U=C\r\}&&C\subseteq X\textrm{ and }X\comp U=X\comp\l(X\comp C\r)=C\\
        &=\l\{U\in\pow\l(X\r)\mid X\comp U\in\mc{C}\r\}&&\textrm{Substitution}\\
        &\subseteq\mc{T}.&&\mc{C}\subseteq\mc{F}
    \end{alignedat}\tag{$\,1\,$}
\end{equation}$$
$$\begin{equation}
    \begin{alignedat}{2}
        \l\{X\comp U\mid U\in\mc{U}\r\}&=\l\{C\in\pow\l(X\r)\mid\ex U\in\mc{U}:C=X\comp U\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of set of relative complements}\\
        &=\l\{C\in\pow\l(X\r)\mid\ex U\in\mc{U}:X\comp C=U\r\}&&U\subseteq X\textrm{ and }X\comp C=X\comp\l(X\comp U\r)=U\\
        &=\l\{C\in\pow\l(X\r)\mid X\comp C\in\mc{U}\r\}&&\textrm{Substitution}\\
        &\subseteq\mc{F}.&&\mc{U}\subseteq\mc{T}
    \end{alignedat}\tag{$\,2\,$}
\end{equation}$$
* ($\Rightarrow$): Assume that $\mc{T}$ satisfies $\axitop[1]$ to $\axitop[3]$, so $\mc{F}$ is the set of closed sets of $X$.
    * ($\axitopcl[1]$): Observe that $X\comp\em=X\in\mc{T}$, so $\em\in\mc{F}$. Similarly, we have $X\comp X=\em\in\mc{T}$ and thus $X\in\mc{F}$.

    * ($\axitopcl[2]$): Take a non-empty collection $\mc{C}\subseteq\mc{F}$. Using De Morgan's Laws and $\axitop[2]$, we see that$$\begin{equation}
            X\comp\bigcap\mc{C}=\bigcup\underbrace{\l\{X\comp C\mid C\in\mc{C}\r\}}_{\mathclap{\subseteq\mc{T}\textrm{ from (1)}}}\in\mc{T}\ \ \ \ \Rightarrow\ \ \ \ \bigcap\mc{C}\in\mc{F}.
        \end{equation}$$
    * ($\axitopcl[3]$): Take a finite collection $\mc{C}\subseteq\mc{F}$. If $\mc{C}=\em$, then $\bigcup\mc{C}=\em\in\mc{F}$ from $\axitopcl[1]$. Otherwise, using De Morgan's Laws and $\axitop[3]$, we see that$$\begin{equation}
            X\comp\bigcup\mc{C}=\bigcap\underbrace{\l\{X\comp C\mid C\in\mc{C}\r\}}_{\mathclap{\subseteq\mc{T}\textrm{ from (1)}}}\in\mc{T}\ \ \ \ \Rightarrow\ \ \ \ \bigcup\mc{C}\in\mc{F}.
        \end{equation}$$
* ($\Leftarrow$): Assume that $\mc{F}$ satisfies $\axitopcl[1]$ to $\axitopcl[3]$.
    * ($\axitop[1]$): Observe that $X\comp\em=X\in\mc{F}$, so $\em\in\mc{T}$. Similarly, we have $X\comp X=\em\in\mc{F}$ and thus $X\in\mc{T}$.

    * ($\axitop[2]$): Take a collection $\mc{U}\subseteq\mc{T}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}$ from $\axitop[1]$. Otherwise, using De Morgan's Laws and $\axitopcl[2]$, we see that$$\begin{equation}
            X\comp\bigcup\mc{U}=\bigcap\underbrace{\l\{X\comp U\mid U\in\mc{U}\r\}}_{\mathclap{\subseteq\mc{F}\textrm{ from (2)}}}\in\mc{F}\ \ \ \ \Rightarrow\ \ \ \ \bigcup\mc{U}\in\mc{T}.
        \end{equation}$$
    * ($\axitop[3]$): Take a non-empty finite collection $\mc{U}\subseteq\mc{T}$. Using De Morgan's Laws and $\axitopcl[3]$, we see that$$\begin{equation}
            X\comp\bigcap\mc{U}=\bigcup\underbrace{\l\{X\comp U\mid U\in\mc{U}\r\}}_{\mathclap{\subseteq\mc{F}\textrm{ from (2)}}}\in\mc{F}\ \ \ \ \Rightarrow\ \ \ \ \bigcap\mc{U}\in\mc{T}.\qedin
        \end{equation}$$

---

**Remark.** This allows us to instead define a topology on $X$ as a collection of subsets $\mc{F}\subseteq\pow\l(X\r)$ satisfying $\axitopcl[1]$ to $\axitopcl[3]$; its elements are called closed sets. The original definition can then be recovered by defining
$$\begin{equation}
    \mc{T}\coloneqq\l\{U\in\pow\l(X\r)\mid X\comp U\in\mc{F}\r\},
\end{equation}$$
that is, by defining open sets as relative complements of closed sets.<span style="float:right;">$\blacklozenge$</span>
