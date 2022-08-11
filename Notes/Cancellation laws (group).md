<div class="topSpace"></div>

Date Created: 04/05/2022 16:35:04
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G,\ast}$ be a group. Then, for all $g,h,k\in G$, we have_
$$\begin{equation}
    gk=hk\Rightarrow g=h\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ kg=kh\Rightarrow g=h.
\end{equation}$$

```

_Proof_. Let $k'$ be an inverse of $k$ and observe that
$$\begin{align}
    \l(gk\r)k'&=\l(hk\r)k'\hspace{1.02in}k'\l(kg\r)\hspace{-0.5in}&&=k'\l(kh\r) \hspace{1in}&&\textrm{Substitution} \\
    g\l(kk'\r)&=h\l(kk'\r)\hspace{0.94in}\l(k'k\r)g\hspace{-0.37in}&&=\l(k'k\r)h \hspace{1in}&&\textrm{Associativity of $\ast$} \\
    ge&=he\hspace{1.66in}eg\hspace{-0.6in}&&=eh \hspace{1in}&&\textrm{$k'$ is an inverse of $k$}\\
    g&=h\hspace{1.84in}g\hspace{-0.6in}&&=h. \hspace{1in}&&\textrm{$e$ is the unit element of $G$}\qedin
\end{align}$$
