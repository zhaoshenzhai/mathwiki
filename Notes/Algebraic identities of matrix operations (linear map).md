<br />
<br />

Date Created: 27/05/2022 21:46:00
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of left-multiplication of matrices]], [[Identity function is the identity of function composition]], [Direct product of groups$\slash$function groups are groups](Direct%20product%20of%20groups;%20function%20groups%20are%20groups.md), [[Cancellation laws (group)]], [[Algebraic identities of composition of linear maps]], [[Composition of relations is associative]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p,q\in\N^\ast$. Then, for all $A,A'\in\mat{m\times n}{K}$, $B,B'\in\mat{n\times p}{K}$, $C\in\mat{p\times q}{K}$, and $\alpha\in K$, the following algebraic identities hold:_
* _(Unitality of $\times$): $I_mA=A=AI_n$._

* _(Absorption of $0$): _$A 0_{n\times p}=0_{m\times p}=0_{m\times n} B$_._
* _(Left-distributivity of $\times$ over $+$): $A\l(B+B'\r)=A B+A B'$._
* _(Right-distributivity of $\times$ over $+$): $\l(A+A'\r) B=A B+A' B$._
* _(Compatibility between $\times$ and $\cdot$): $\alpha\l(A B\r)=\l(\alpha A\r) B=A\l(\alpha B\r)$._
* _(Associativity of $\times$): $A\l(BC\r)=\l(AB\r)C$._

```

_Proof_. Consider the function
$$\begin{equation}
    \mc{L}_{m\times n}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r) \ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
that sends each $m\times n$ matrix to its corresponding left-multiplication map. Since $\mc{L}$ is invertible, we see, in particular, that $\mc{L}\l(A\r)=\mc{L}\l(B\r)\Rightarrow A=B$. Thus, for each assertion, it suffices to prove that their corresponding left-multiplication maps coincide.
* (Unitality of $\times$): Observe that
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times n}\l(A\r)&=\id_{K^m}\circ\mc{L}_{m\times n}\l(A\r) \\
        &=\mc{L}_m\l(I_m\r)\circ\mc{L}_{m\times n}\l(A\r) \\
        &=\mc{L}_{m\times n}{I_mA}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \mc{L}_{m\times n}\l(A\r)&=\mc{L}_{m\times n}\l(A\r)\circ\id_{K^n} && \textrm{Identity function is the identity of $\circ$}\\
        &=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_n\l(I_n\r) && \mc{L}\textrm{ preserves identity} \\
        &=\mc{L}_{m\times n}\l(AI_n\r). && \mc{L}\textrm{ respects }\times
    \end{aligned}
\end{equation}$$

* (Absorption of $0$): Let $0_{mn}\in\hom\l(K^n,K^m\r)$ denote the zero function; that is, the function defined by $0_{mn}\l(\v{x}\r)=\v{0}\in K^m$ for all $\v{x}\in K^n$. We first need the following lemma:
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times p}\l(0_{m\times p}\r)+0_{mp}&=\mc{L}_{m\times n}\l(0_{m\times p}\r) && 0_{mp}\textrm{ is the neutral element of }\hom\l(K^n,K^m\r) \\
        &=\mc{L}_{m\times p}\l(0_{m\times p}+0_{m\times p}\r) && 0_{m\times p}\textrm{ is the neutral element of }\mat{m\times p}{K} \\
        &=\mc{L}_{m\times p}\l(0_{m\times p}\r)+\mc{L}_{m\times p}\l(0_{m\times p}\r), && \mc{L}\textrm{ is linear}
    \end{aligned}\tag{$\ast$}
\end{equation}$$
which, by the cancellation laws in the group $\hom\l(K^n,K^m\r)$, implies that $\mc{L}_{m\times p}\l(0_{m\times p}\r)=0_{mp}$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times p}\l(A0_{n\times p}\r)&=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(0_{n\times p}\r) \\
        &=\mc{L}_{m\times n}\l(A\r)\circ0_{np} \\
        &=0_{mp} \\
        &=\mc{L}_{m\times p}\l(0_{m\times p}\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \mc{L}_{m\times p}\l(0_{m\times n}B\r)&=\mc{L}_{m\times p}\l(0_{m\times n}\r)\circ\mc{L}_{n\times p}\l(B\r) && \mc{L}\textrm{ respects }\times \\
        &=0_{mn}\circ\mc{L}_{n\times p}\l(B\r) && \ref{\ast} \\
        &=0_{mp} && \textrm{Linear map fixes zero vector} \\
        &=\mc{L}_{m\times p}\l(0_{m\times p}\r). && \ref{\ast}
    \end{aligned}
\end{equation}$$
* (Left-distributivity of $\times$ over $+$): Observe that
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times p}\l(A\l(B+B'\r)\r)&=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(B+B'\r) && \mc{L}\textrm{ respects }\times \\
        &=\mc{L}_{m\times n}\l(A\r)\circ\l[\mc{L}_{n\times p}\l(B\r)+\mc{L}_{n\times p}\l(B'\r)\r] && \mc{L}\textrm{ is linear} \\
        &=\l[\mc{L}_{m\times n}{A}\circ\mc{L}_{n\times p}\l(B\r)\r]+\l[\mc{L}_{m\times n}\l(A\r)+\mc{L}_{n\times p}\l(B\r)\r] && \textrm{Left-distribution of $\circ$ over $+$} \\
        &=\mc{L}_{m\times p}\l(AB\r)+\mc{L}_{m\times p}\l(AB'\r) && \mc{L}\textrm{ respects }\times \\
        &=\mc{L}_{m\times p}\l(AB+AB'\r). && \mc{L}\textrm{ is linear}
    \end{aligned}
\end{equation}$$
* (Right-distributivity of $\times$ over $+$): Observe that
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times p}\l(\l(A+A'\r)B\r)&=\mc{L}_{m\times n}\l(A+A'\r)\circ\mc{L}_{n\times p}\l(B\r) && \mc{L}\textrm{ respects }\times \\
        &=\l[\mc{L}_{m\times n}\l(A\r)+\mc{L}_{m\times n}\l(A'\r)\r]\circ\mc{L}_{n\times p}\l(B\r) && \mc{L}\textrm{ is linear} \\
        &=\l[\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(B\r)\r]+\l[\mc{L}_{m\times n}\l(A'\r)\circ\mc{L}_{n\times p}\l(B\r)\r] && \textrm{Right-distribution of $\circ$ over $+$} \\
        &=\mc{L}_{m\times p}\l(AB\r)+\mc{L}_{m\times p}\l(A'B\r) && \mc{L}\textrm{ respects }\times \\
        &=\mc{L}_{m\times p}\l(AB+A'B\r). && \mc{L}\textrm{ is linear}
    \end{aligned}
\end{equation}$$
* (Compatibility between $\times$ and $\cdot$): Observe that
$$\begin{equation}
    \begin{aligned}
        \mc{L}_{m\times p}\l(\alpha\l(AB\r)\r)&=\alpha\mc{L}_{m\times p}\l(AB\r) \\
        &=\alpha\l[\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(B\r)\r] \\
        &=\l[\alpha\mc{L}_{m\times n}\l(A\r)\r]\circ\mc{L}_{n\times p}\l(B\r) \\
        &=\mc{L}_{m\times n}\l(\alpha A\r)\circ\mc{L}_{n\times p}\l(B\r) \\
        &=\mc{L}_{m\times p}\l(\l(\alpha A\r)B\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \mc{L}_{m\times p}\l(\alpha\l(AB\r)\r)&=\alpha\mc{L}_{m\times p}\l(AB\r) && \mc{L}\textrm{ is linear} \\
        &=\alpha\l[\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(B\r)\r] && \mc{L}\textrm{ respects }\times \\
        &=\mc{L}_{m\times n}\l(A\r)\circ\l[\alpha\mc{L}_{n\times p}\l(B\r)\r] && \textrm{Compatibility between $\circ$ and $\cdot$} \\
        &=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(\alpha B\r) && \mc{L}\textrm{ is linear} \\
        &=\mc{L}_{m\times p}\l(A\l(\alpha B\r)\r). && \mc{L}\textrm{ respects }\times
    \end{aligned}
\end{equation}$$
* (Associativity of $\times$): Observe that the matrices $AB$, $BC$, $A\l(BC\r)$, and $\l(AB\r)C$ are all defined with sizes $m\times k$, $n\times q$, $m\times q$, and $m\times q$, respectively; in particular, the sizes of $A\l(BC\r)$ and $\l(AB\r)C$ coincide. To show that the matrices coincide, observe that
$$\begin{align}
    \mc{L}_{m\times q}\l(A\l(BC\r)\r)&=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times q}\l(BC\r) && \mc{L}\textrm{ respects }\times \\
    &=\mc{L}_{m\times n}\l(A\r)\circ\l[\mc{L}_{n\times p}\l(B\r)\circ\mc{L}_{p\times q}\l(C\r)\r] && \mc{L}\textrm{ respects }\times \\
    &=\l[\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(B\r)\r]\circ\mc{L}_{p\times q}\l(C\r) && \textrm{Composition of functions is associative} \\
    &=\mc{L}_{m\times p}\l(AB\r)\circ\mc{L}_{p\times q}\l(C\r) && \mc{L}\textrm{ respects }\times \\
    &=\mc{L}_{m\times q}\l(\l(AB\r)C\r). && \mc{L}\textrm{ respects }\times\qedin
\end{align}$$
