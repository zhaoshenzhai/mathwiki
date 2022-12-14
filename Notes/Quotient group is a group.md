<div class="topSpace"></div>

Date Created: 27/10/2022 19:16:14
Tags: #Proposition #Courses/MATH235

Proved by: [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $N\nsubgrpeq G$ be a normal subgroup of a group $\tpl{G,\ast}$ and consider the quotient set $G/N\coloneqq G/\!\sim$ of $G$ under the equivalence relation $\sim$ defined by_
$$\begin{equation}
    g_1\sim g_2\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ g_1N=g_2N
\end{equation}$$
_for all $g_1,g_2\in G$. Then the binary operation_
$$\begin{equation}
    \blob:G/N\times G/N\to G/N\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{g_1N,g_2N}\mapsto\l(g_1\ast g_2\r)N
\end{equation}$$
_is well-defined and makes $\tpl{G/N,\blob}$ into a group. Furthermore, if $G$ is Abelian, then $G/N$ is Abelian too._

```

_Proof_. We first verify that elements of $G/N$ are the cosets of $N$ in $G$. Indeed, for all $g\in G$, we claim that $\l[g\r]_\sim=gN$. First, observe that
$$\begin{equation}
    \l[g\r]_\sim=\l\{h\in G\mid g\sim h\r\}=\l\{h\in G\mid gN=hN\r\}.
\end{equation}$$
* ($\subseteq$): Take $x\in\l[g\r]_\sim$, so $gN=xN$. Since $x\in xN$, we see that $x\in gN$.
* ($\supseteq$): Take $x\in gN$, so $x=gn$ for some $n\in\N$. Then $xN=\l(gn\r)N=gN$, so $x\in\l[g\r]_\sim$.

Moving on, we check that $\blob$ is well-defined. Indeed, for all $g_1,g_1',g_2,g_2'\in G$ such that $g_1\sim g_1'$ and $g_2\sim g_2'$, we have that $g_1N=g_1'N$ and $g_2N=g_2'N$. Thus $g_1'=g_1n_1$ and $g_2'=g_2n_2$ for some $n_1,n_2\in N$, so
$$\begin{equation}
    g_1'g_2'=\l(g_1n_1\r)\l(g_2n_2\r)=g_1\l(n_1g_2\r)n_2.
\end{equation}$$
Since $g_2N=Ng_2$, we see that $n_1g_2=g_2n_3$ for some $n_3\in N$, so $g_1'g_2'=g_1g_2n_3n_2$ and thus $\l(g_1'g_2'\r)N=\l(g_1g_2n_3n_2\r)N=\l(g_1g_2\r)N$. We now verify the group axioms for $\tpl{G/N,\blob}$.
* (Associativity): Take $g_1N,g_2N,g_3N\in G/N$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(g_1N\r)\blob\l(g_2N\r)\r]\blob\l(g_3N\r)&=\l[\l(g_1\ast g_2\r)N\r]\blob\l(g_3N\r) && \textrm{Definition of $\blob$} \\
        &=\l[\l(g_1\ast g_2\r)\ast g_3\r]N && \textrm{Definition of $\blob$} \\
        &=\l[g_1\ast\l(g_2\ast g_3\r)\r]N && \textrm{Associativity of $\ast$} \\
        &=\l(g_1N\r)\blob\l[\l(g_2\ast g_3\r)N\r] && \textrm{Definition of $\blob$} \\
        &=\l(g_1N\r)\blob\l[\l(g_2N\r)\blob\l(g_3N\r)\r]. && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$

* (Identity): Take $gN\in G/N$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(eN\r)\blob\l(gN\r)&=\l(e\ast g\r)N && \textrm{Definition of $\blob$} \\
        &=gN && \textrm{$e$ is the identity of $G$} \\
        &=\l(g\ast e\r)N && \textrm{$e$ is the identity of $G$} \\
        &=\l(gN\r)\blob\l(eN\r). && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
* (Inverse): Take $gN\in G/N$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(g^{-1}N\r)\blob\l(gN\r)&=\l(g^{-1}\ast g\r)N && \textrm{Definition of $\blob$} \\
        &=eN && \textrm{$g^{-1}$ is the inverse of $g$} \\
        &=\l(g\ast g^{-1}\r)N && \textrm{$g^{-1}$ is the inverse of $g$} \\
        &=\l(gN\r)\blob\l(g^{-1}N\r), && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
so $\l(gN\r)^{-1}=\l(g^{-1}N\r)$.

Finally, if $G$ is Abelian, then $\l(g_1N\r)\blob\l(g_2N\r)=\l(g_1\ast g_2\r)N=\l(g_2\ast g_1\r)N=\l(g_2N\r)\blob\l(g_1N\r)$ for all $g_1,g_2\in G$, so $G/N$ is Abelian too.<span style="float:right;">$\blacksquare$</span>
