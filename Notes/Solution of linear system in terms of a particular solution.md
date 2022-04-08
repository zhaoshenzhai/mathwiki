<br />
<br />

Date Created: 01/04/2022 17:36:28
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider any consistent $m\times n$-linear system $A\v{x}=\v{b}$. Fix $\v{x}_p\in K^n$ such that $A\v{x}_p=\v{b}$. Then $\v{s}\in K^n$ is a solution of $A\v{x}=\v{b}$ iff it has the form_
$$\begin{equation}
    \v{s}=\v{x}_p+\v{x}_0
\end{equation}$$
_where $\v{x}_0$ is any solution of its associated homogeneous system $A\v{x}=\v{0}$. Formally,_
$$\begin{equation}
    \fa\v{x}_p\in K^n:A\v{x}_p=\v{b}\Rightarrow\l[\fa\v{s}\in K^n:A\v{s}=\v{b}\Leftrightarrow\l(\ex\v{x}_0\in K^n:A\v{x}_0=\v{0}\land\v{s}=\v{x}_p+\v{x}_0\r)\r].
\end{equation}$$

```

_Proof_. Let $\v{x}_p\in K^n$ be such that $A\v{x}_p=\v{b}$, and take $\v{s}\in K^n$.
* ($\Rightarrow$): If $A\v{s}=\v{b}$, let $\v{x}_0\coloneqq\v{s}-\v{x}_p$ so that $\v{s}=\v{x}_p+\v{x}_0$ and
$$\begin{equation}
    A\l(\v{s}-\v{x}_p\r)=A\v{s}-A\v{x}_p=\v{b}-\v{b}=\v{0}.
\end{equation}$$
* ($\Leftarrow$): Suppose that there exists $\v{x}_0\in K^n$ such that $A\v{x}_0=\v{b}$. It follows then that
$$\begin{equation}
    A\l(\v{x}_p+\v{x}_0\r)=A\v{x}_p+A\v{x}_0=\v{b}+\v{0}=\v{b},
\end{equation}$$
so $\v{s}\coloneqq\v{x}_p+\v{x}_0$ is a solution of $A\v{x}=\v{b}$.<span style="float:right;">$\blacksquare$</span>
