<br />
<br />

Date Created: 13/04/2022 21:05:54
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$. Let $R\coloneqq\rref\l(A\r)$, say with $r$ non-zero rows each with its pivot column $k_i$. For convenience, we shall denote_
$$\begin{equation}
    \fa j\in\l\{1,\dots,n\r\}:\mc{C}_j\coloneqq\l\{j+1,\dots,n\r\},\ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column}}\r\},\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{U}\coloneqq\l\{1,\dots,n\r\}\setminus\mc{K}.
\end{equation}$$
_Then, for all $\alpha\in\mc{U}$, the set $B$ of all tuples_ $\v{b}_\alpha$ _defined by_
$$\begin{equation}
    \l(\v{b}_\alpha\r)_\beta\coloneqq
        \begin{dcases}
            -r_{i\alpha} & \textrm{\it{if\hspace{0.1in}}}\alpha\in\mc{C}_\beta\setminus\mc{K}\land\ex i\in\l\{1,\dots,r\r\}:\beta=k_i\\
            \delta_{\alpha\beta} & \textrm{\it{else}}
        \end{dcases}
\end{equation}$$
_form a basis for $\null\l(A\r)$._

```

_Proof_. 
