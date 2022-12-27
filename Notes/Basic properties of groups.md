<div class="topSpace"></div>

Date Created: 04/05/2022 16:35:04
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G,\ast}$ be a group. Then, for all $g,h,k\in G$, the following algebraic identities hold:_
* _(Cancellation Laws): $gk=hk\Rightarrow g=h$ and $kg=kh\Rightarrow g=h.$_
* _(Division): There exists a unique $x\in G$ such that $gx=h$. Similarly for when $xg=h$._
* _(Inverse): $\l(gh\r)^{-1}=h^{-1}g^{-1}$._

```

_Proof_.
* (Cancellation Laws): Let $k'$ be an inverse of $k$ and observe that
$$\begin{align}
    \l(gk\r)k'&=\l(hk\r)k'\hspace{1.02in}k'\l(kg\r)\hspace{-0.5in}&&=k'\l(kh\r) \hspace{1in}&&\textrm{Substitution} \\
    g\l(kk'\r)&=h\l(kk'\r)\hspace{0.94in}\l(k'k\r)g\hspace{-0.37in}&&=\l(k'k\r)h \hspace{1in}&&\textrm{Associativity of $\ast$} \\
    ge&=he\hspace{1.66in}eg\hspace{-0.6in}&&=eh \hspace{1in}&&\textrm{$k'$ is an inverse of $k$}\\
    g&=h\hspace{1.84in}g\hspace{-0.6in}&&=h. \hspace{1in}&&\textrm{$e$ is the identity element of $G$}
\end{align}$$

* (Division): Observe that $g\l(g^{-1}h\r)=\l(gg^{-1}\r)h=eh=h$, so set $x\coloneqq g^{-1}h$. For uniqueness, suppose that $k,l\in G$ are both solutions to $gx=h$, so $gk=h=gl$. From the cancellation laws, we see that $g=l$, so we are done. Similarly, if $xg=h$, set $x\coloneqq hg^{-1}$, and for uniqueness, the existence of $k,l\in G$ such that $kg=h=lg$ implies that $k=l$.
* (Inverse): Observe that
$$\begin{align}
    \l(gh\r)\l(h^{-1}g^{-1}\r)&=g\l(hh^{-1}\r)g^{-1} && \textrm{Associativity of $\ast$} \\
    &=geg^{-1} && \textrm{$h^{-1}$ is an inverse of $h$} \\
    &=gg^{-1} && \textrm{$e$ is the idtntiy element of $G$} \\
    &=e. && \textrm{$g^{-1}$ is an inverse of $g$}
\end{align}$$
Similarly, we have $\l(h^{-1}g^{-1}\r)\l(gh\r)=e$.<span style="float:right;">$\blacksquare$</span>
