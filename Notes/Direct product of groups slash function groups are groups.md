---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/05/2022 12:14:10
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{\mc{G}_i\r\}_{i\in I}\coloneqq\l\{\tpl{G_i,\ast_i,e_i}\r\}_{i\in I}$ _be an indexed family of groups. Then the group_ $\mc{G}\coloneqq\tpl{\prod_{i\in I}G_i,\blob,u}$_, consisting of_
* _the Cartesian product_ $\prod_{i\in I}G_i$_,_
* _the binary operation $\blob$ on_ $\prod_{i\in I}G_i$ _defined, for all_ $f,g\in\prod_{i\in I}G_i$_, by $\l(f\blob g\r)\l(i\r)\coloneqq f\l(i\r)\ast_ig\l(i\r)$ for all $i\in I$, and_
* _the unit function_ $u\in\prod_{i\in I}G_i$ _defined by $u\l(i\r)\coloneqq e_i$ for all $i\in I$,_

_is a group. Furthermore, if each $\mc{G}_i$ is Abelian, then $\mc{G}$ is Abelian too._

```

**Remark.** In particular, if there exists a group $\tpl{G,\ast,e}$ such that $G_i=G$, $\ast_i=\ast$, and $e_i=e$ for all $i\in I$, then $\prod_{i\in I}G_i=G^I$. Hence $\mc{G}$ is the function group from $I$ into $G$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We verify the axioms of a group.
* (Associativity): Take $f,g,h\in\prod_{i\in I}G_i$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(f\blob g\r)\blob h\r]\l(i\r)&=\l(f\blob g\r)\l(i\r)\ast_ih\l(i\r) && \textrm{Definition of $\blob$} \\
        &=\l[f\l(i\r)\ast_ig\l(i\r)\r]\ast_ih\l(i\r) && \textrm{Definition of $\blob$} \\
        &=f\l(i\r)\ast_i\l[g\l(i\r)\ast_ih\l(i\r)\r] && \textrm{Associativity of $\ast$} \\
        &=f\l(i\r)\ast_i\l[\l(g\blob h\r)\l(i\r)\r] && \textrm{Definition of $\blob$} \\
        &=\l[f\blob\l(g\blob h\r)\r]\l(i\r) && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $\l(f\blob g\r)\blob h=f\blob\l(g\blob h\r)$.

* (Unit): Take $f\in\prod_{i\in I}G_i$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(f\blob u\r)\l(i\r)&=f\l(i\r)\ast_iu\l(i\r) \\
        &=f\l(i\r)\ast_ie_i \\
        &=f\l(i\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(u\blob f\r)\l(i\r)&=u\l(i\r)\ast_if\l(i\r) && \textrm{Definition of $\blob$}\\
        &=e_i\ast_if\l(i\r) && \textrm{Definition of $u$} \\
        &=f\l(i\r) && \textrm{$e_i$ is the unit of $G_i$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $f\blob u=f=u\blob f$.
* (Inverse): Take $f\in\prod_{i\in I}G_i$ and define $f^{-1}\in\prod_{i\in I}G_i$ by $f^{-1}\l(i\r)\coloneqq\l[f\l(i\r)\r]^{-1}$ for all $i\in I$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \l[f\blob\l(f^{-1}\r)\r]\l(i\r)&=f\l(i\r)\ast_i\l(f^{-1}\r)\l(i\r) \\
        &=f\l(i\r)\ast_i\l[f\l(i\r)\r]^{-1} \\
        &=e_i \\
        &=u\l(i\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\l(f^{-1}\r)\blob f\r]\l(i\r)&=\l(f^{-1}\r)\l(i\r)\ast_if\l(i\r) && \textrm{Definition of $\blob$} \\
        &=\l[f\l(i\r)\r]^{-1}\ast_if\l(i\r) && \textrm{Defintinition of $f^{-1}$} \\
        &=e_i && \textrm{$\l[f\l(i\r)\r]^{-1}$ is the inverse of $f\l(i\r)$ in $G_i$} \\
        &=u\l(i\r) && \textrm{Definition of $u$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $f\blob f^{-1}=u=f^{-1}\blob f$.

Additionally, if each $\mc{G}_i$ is Abelian, take $f,g\in\prod_{i\in I}G_i$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(f\blob g\r)\l(i\r)&=f\l(i\r)\ast_ig\l(i\r) && \textrm{Definition of $\blob$} \\
        &=g\l(i\r)\ast_if\l(i\r) && \textrm{$\mc{G}_i$ is Abelian} \\
        &=\l(g\blob f\r)\l(i\r) && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $f\blob g=g\blob f$. Hence $\mc{G}$ is Abelian too.<span style="float:right;">$\blacksquare$</span>
