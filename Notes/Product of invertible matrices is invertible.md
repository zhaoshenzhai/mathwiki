<div class="topSpace"></div>

Date Created: 08/04/2022 05:00:31
Tags: #Proposition

Proved by: [[Matrix invertible iff left-multiplication invertible]], [[Basic properties of left-multiplication of matrices]], [[Composition of bijections is a bijection]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^+$. Then, for all invertible matrices $A,B\in\mat{n}{K}$, their product $AB\in\mat{n}{K}$ is invertible with inverse_
$$\begin{equation}
    \l(AB\r)^{-1}=B^{-1}A^{-1}.
\end{equation}$$

```

_Proof_. Since $A$ and $B$ are invertible, the linear maps $L_A,L_B:K^n\to K^n$ are also invertible with inverses
$$\begin{equation}
    \l(L_A\r)^{-1}=L_{A^{-1}}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l(L_B\r)^{-1}=L_{B^{-1}}.
\end{equation}$$
Observe then that $L_{AB}=L_A\circ L_B$ is invertible with inverse $\l(L_{AB}\r)^{-1}=L_{\l(AB\r)^{-1}}$, so
$$\begin{equation}
    \begin{aligned}
        L_{\l(AB\r)^{-1}}&=\l(L_A\circ L_B\r)^{-1} && \textrm{Substitutions} \\
        &=\l(L_B\r)^{-1}\circ\l(L_A\r)^{-1} && \textrm{Composition of bijections} \\
        &=L_{B^{-1}}\circ L_{A^{-1}} && \textrm{Substitutions} \\
        &=L_{B^{-1}A^{-1}}. && \textrm{Left-multiplication respects matrix multiplication}
    \end{aligned}
\end{equation}$$
The result follows.<span style="float:right;">$\blacksquare$</span>
