<br />
<br />

Date Created: 27/03/2022 22:21:44
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^\ast$. Then the $n$-tuple space $\l\langle K^n,K,\oplus,\odot\r\rangle$ is the $n$-function space over $K$; here, $n$ is formally regarded as a von-Neumann natural number._

```

_Proof_. It suffices to show that the functions $\oplus$ and $\odot$ are defined as a special case of the ones defining the $n$-function space. Take $\v{x},\v{y}\in K^n$, say with
$$\begin{equation}
    \v{x}=\l[
        \begin{aligned}
            f:n&\to K\\
            i&\mapsto x_i
        \end{aligned}
    \r]\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \v{y}=\l[
        \begin{aligned}
            g:n&\to K\\
            i&\mapsto y_i
        \end{aligned}
    \r].
\end{equation}$$
For vector addition, compute
$$\begin{equation}
    \begin{aligned}
        \v{x}\oplus\v{y}&=\l\langle x_0+y_0,\dots,x_{n-1}+y_{n-1}\r\rangle && \textrm{Definition of $\oplus$ (in the tuple space sense)}\\
        &=\l[
            \begin{aligned}
                A:n&\to K\\
                i&\mapsto x_i+y_i
            \end{aligned}
        \r] && \textrm{Definition of a tuple}\\
        &=\l[
            \begin{aligned}
                A:n&\to k\\
                i&\mapsto f\l(i\r)+g\l(i\r)
            \end{aligned}
        \r] && \textrm{Substitution}\\
        &=f\oplus g, && \textrm{Definition of $\oplus$ (in the function space sense)}
    \end{aligned}
\end{equation}$$
For scalar-vector multiplication, compute

$\begin{align}
     \alpha\odot\v{x}&=\l\langle\alpha\cdot x_0,\dots,\alpha\cdot x_{n-1}\r\rangle && \textrm{Definition of }\odot\textrm{ (in the tuple space sense)}\\
    &=\l[
        \begin{aligned}
            M:n&\to K\\
            i&\mapsto\alpha\cdot x_i
        \end{aligned}
    \r] && \textrm{Definition of a tuple}\\
    &=\l[
        \begin{aligned}
            M:n&\to K\\
            i&\mapsto\alpha\cdot f\l(i\r)
        \end{aligned}
    \r] && \textrm{Substitution}\\
    &=\alpha\odot f. &&\textrm{Definition of }\odot\textrm{ (in the function space sense)}\qedin   
\end{align}$
