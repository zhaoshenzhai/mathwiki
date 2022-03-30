---
alias: auto_aliasing
---

<br />
<br />

Date Created: 23/03/2022 22:18:42
Tags: #Proposition #Closed 

Proved by: [[Solution of system of linear combinations contains solution of original system]], [[Row-equivalence of matrices is an equivalence relation]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider two linear systems $A\v{x}=\v{b}$ and $R\v{x}=\v{z}$ over $K$. If $\l[A\mid\v{b}\r]\sim\l[R\mid\v{z}\r]$, then the two linear systems are equivalent._

```

_Proof_. Since $\l[A\mid\v{b}\r]\sim\l[R\mid\v{z}\r]$, there exist elementary row operations $e_1,\dots,e_k$ such that
$$\begin{equation}
    \l[A\mid\v{b}\r]\xrightarrow{e_1}\l[A_1\mid\v{b}_1\r]\xrightarrow{e_2}\cdots\xrightarrow{e_k}\l[A_k\mid\v{b}_k\r]=\l[R\mid\v{z}\r]
\end{equation}$$
for some $k\in\N$. It suffices to assume only that $\l[A\mid\v{b}\r]\sim\l[A_1\mid\v{b}_1\r]$ and show that the systems $A\v{x}=\v{b}$ and $A_1\v{x}=\v{b}_1$ are equivalent since we can then similarly proceed $\l(k-1\r)$-more times. To this end, we show that the two systems are linear combinations of each other. Assume, w.l.o.g., that $e_1$ only affects the $s^\textrm{th}$ and $t^\textrm{th}$ rows, so all $k^\textrm{th}$ rows, where $k\not\in\l\{s,t\r\}$, are trivial linear combinations of $A\v{x}=\v{b}$ given by constants $c_k=1$ and $c_i=0$ otherwise; that is, all such $k^\textrm{th}$ rows are linear equations of the form
$$\begin{equation}
    a_{k1}x_1+\cdots+a_{kn}x_n=b_k.
\end{equation}$$
Such rows are said to be **unchanged** and is true regardless of the type of $e_1$. For the $s^\textrm{th}$ and $t^\textrm{th}$ rows, there are three cases.
* If $e_1$ is of type 1 that multiplies the $s^\textrm{th}$ row of $A\v{x}=\v{b}$ by a non-zero constant $c\in K$, then the $t^\textrm{th}$ row of $A_1\v{x}=\v{b_1}$ stays unchanged and the $s^\textrm{th}$ row of $A_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    \l(ca_{s1}\r)x_1+\cdots+\l(ca_{sn}\r)x_n=cb_s
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s\r\}$ and $c_s=c$.

* If $e_1$ is of type 2 that adds a non-zero constant $c\in K$ times the $t^\textrm{th}$ row to the $s^\textrm{st}$ row of $A\v{x}=\v{b}$, then the $t^\textrm{th}$ row of $A_1\v{x}=\v{b_1}$ stays unchanged and the $s^\textrm{th}$ row of $A_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    \l(a_{s1}+ca_{t1}\r)x_1+\cdots+\l(a_{sn}+ca_{tn}\r)x_n=b_s+cb_t
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s,t\r\}$, $c_s=1$, and $c_t=c$.

* If $e_1$ is of type 3 that interchanges the $s^\textrm{th}$ and $t^\textrm{th}$ rows of $A\v{x}=\v{b}$, then the $s^\textrm{th}$ (resp. $t^\textrm{th}$) row of $A_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    a_{t1}x_1+\cdots+a_{tn}x_n=b_t\ \ \ \ \ \ \ \ \l(\textrm{resp.}\hspace{0.1in}a_{s1}x_1+\cdots+a_{sn}x_n=b_s\r)
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s,t\r\}$, $c_s=0$ (resp. $c_s=1$), and $c_t=1$ (resp. $c_t=0$).

The converse, stating that each linear equation in $A\v{x}=\v{b}$ is a linear combination of $A_1\v{x}=\v{b}_1$, proceeds similarly as above; its assumption that $\l[A_1\mid\v{b}_1\r]\sim\l[A\mid\v{b}\r]$ is justified by by the fact that $\sim$ is an equivalence relation and is thus, in particular, symmetric. Thus the linear systems $A\v{x}=\v{b}$ and $A_1\v{x}=\v{b}_1$ are linear combinations of each other, so they have the same solutions and are hence equivalent.<span style="float:right;">$\blacksquare$</span>
