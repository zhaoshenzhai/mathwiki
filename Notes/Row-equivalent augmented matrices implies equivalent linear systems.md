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

_Let $K$ be a field and consider two linear systems $\v{A}\v{x}=\v{b}$ and $\v{R}\v{x}=\v{z}$ over $K$. If $\l[\v{A}\mid\v{b}\r]\sim\l[\v{R}\mid\v{z}\r]$, then the two linear systems are equivalent._

```

_Proof_. Since $\l[\v{A}\mid\v{b}\r]\sim\l[\v{R}\mid\v{z}\r]$, there exist elementary row operations $e_1,\dots,e_k$ such that
$$\begin{equation}
    \l[\v{A}\mid\v{b}\r]\xrightarrow{e_1}\l[\v{A}_1\mid\v{b}_1\r]\xrightarrow{e_2}\cdots\xrightarrow{e_k}\l[\v{A}_k\mid\v{b}_k\r]=\l[\v{R}\mid\v{z}\r]
\end{equation}$$
for some $k\in\N$. It suffices to assume only that $\l[\v{A}\mid\v{b}\r]\sim\l[\v{A}_1\mid\v{b}_1\r]$ and show that the systems $\v{A}\v{x}=\v{b}$ and $\v{A}_1\v{x}=\v{b}_1$ are equivalent since we can then similarly proceed $\l(k-1\r)$-more times. To this end, we show that the two systems are linear combinations of each other. Assume, w.l.o.g., that $e_1$ only affects the $s^\textrm{th}$ and $t^\textrm{th}$ rows, so all $k^\textrm{th}$ rows, where $k\not\in\l\{s,t\r\}$, are trivial linear combinations of $\v{A}\v{x}=\v{b}$ given by constants $c_k=1$ and $c_i=0$ otherwise; that is, all such $k^\textrm{th}$ rows are linear equations of the form
$$\begin{equation}
    A_{k1}x_1+\cdots+A_{kn}x_n=b_k.
\end{equation}$$
Such rows are said to be **unchanged** and is true regardless of the type of $e_1$. For the $s^\textrm{th}$ and $t^\textrm{th}$ rows, there are three cases.
* If $e_1$ is of type 1 that multiplies the $s^\textrm{th}$ row of $\v{A}\v{x}=\v{b}$ by a non-zero constant $c\in K$, then the $t^\textrm{th}$ row of $\v{A}_1\v{x}=\v{b_1}$ stays unchanged and the $s^\textrm{th}$ row of $\v{A}_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    \l(cA_{s1}\r)x_1+\cdots+\l(cA_{sn}\r)x_n=cb_s
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s\r\}$ and $c_s=c$.

* If $e_1$ is of type 2 that adds a non-zero constant $c\in K$ times the $t^\textrm{th}$ row to the $s^\textrm{st}$ row of $\v{A}\v{x}=\v{b}$, then the $t^\textrm{th}$ row of $\v{A}_1\v{x}=\v{b_1}$ stays unchanged and the $s^\textrm{th}$ row of $\v{A}_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    \l(A_{s1}+cA_{t1}\r)x_1+\cdots+\l(A_{sn}+cA_{tn}\r)x_n=b_s+cb_t
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s,t\r\}$, $c_s=1$, and $c_t=c$.

* If $e_1$ is of type 3 that interchanges the $s^\textrm{th}$ and $t^\textrm{th}$ rows of $\v{A}\v{x}=\v{b}$, then the $s^\textrm{th}$ (resp. $t^\textrm{th}$) row of $\v{A}_1\v{x}=\v{b_1}$ is obtained by the linear combination
$$\begin{equation}
    A_{t1}x_1+\cdots+A_{tn}x_n=b_t\ \ \ \ \ \ \ \ \l(\textrm{resp.}\hspace{0.1in}A_{s1}x_1+\cdots+A_{sn}x_n=b_s\r)
\end{equation}$$
given by $c_i=0$ for $i\in\l\{1,\dots,m\r\}\setminus\l\{s,t\r\}$, $c_s=0$ (resp. $c_s=1$), and $c_t=1$ (resp. $c_t=0$).

The converse, stating that each linear equation in $\v{A}\v{x}=\v{b}$ is a linear combination of $\v{A}_1\v{x}=\v{b}_1$, proceeds similarly as above; its assumption that $\l[\v{A}_1\mid\v{b}_1\r]\sim\l[\v{A}\mid\v{b}\r]$ is justified by by the fact that $\sim$ is an equivalence relation and is thus, in particular, symmetric. Thus the linear systems $\v{A}\v{x}=\v{b}$ and $\v{A}_1\v{x}=\v{b}_1$ are linear combinations of each other, so they have the same solutions and are hence equivalent.<span style="float:right;">$\blacksquare$</span>
