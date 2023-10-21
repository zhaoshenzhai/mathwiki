---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/10/2023 16:29:42
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Luzin).

Let $\tpl{X,\mu}$ be a topological space equipped with a Borel measure $\mu$ and let $Y$ be a second countable space.
* Every $\mu$-measurable function $f:X\to Y$ is almost Borel, i.e. there is a Borel conull set $X'\subseteq X$ such that $\l.f\r|_{X'}$ is Borel. Moreover there is a Borel function $g:X\to Y$ such that $f=g$ a.e.
* If $\tpl{X,\mu}$ is strongly-regular, then every $\mu$-measurable function is $\epsilon$-almost continuous, i.e. for all $\epsilon>0$, there is a closed set $X'\subseteq X$ with $\mu\l(X\comp X'\r)<\epsilon$ such that $\l.f\r|_{X'}$ is continuous.

```

<i>Proof.</i> Let $f:X\to Y$ be $\mu$-measurable and fix a countable basis $\mc{V}\coloneqq\l\{V_n\r\}$ of $Y$. Note that $\gen{\mc{V}}_\sigma=\mc{B}\l(Y\r)$, so it suffices to ‘check things’ for $\mc{V}$.
* It suffices to show that each $f^{-1}\!\l(V_n\r)$ is Borel. Indeed, since $f^{-1}\!\l(V_n\r)$ is $\mu$-measurable, there is a Borel set $B_n\in\mc{B}\l(X\r)$ such that $f^{-1}\!\l(V_n\r)\approx^\mu B_n$. They differ by a $\mu$-null set, so collecting all of them gives us a $\mu$-null set $Z\coloneqq\bigcup_n\l(f^{-1}\!\l(V_n\r)\symdiff B_n\r)$. Let $\hat{Z}\supseteq Z$ be a Borel null set and let $X'\coloneqq X\comp\hat{Z}$. Then $\l.f\r|_{X'}$ is Borel since
$$\begin{equation}
    \l.f\r|_{X'}^{-1}\!\l(V_n\r)=X'\cap f^{-1}\!\l(V_n\r)=X'\cap B_n.
\end{equation}$$
* Take $\epsilon>0$. It suffices to show that each $f^{-1}\!\l(V_n\r)$ is Borel. Indeed, by strong-regularity, there is an open set $U_n\subseteq X$ such that $f^{-1}\!\l(V_n\r)\approx_{\epsilon/2^{n+1}}U_n$. We gather all the errors into a $\mu$-null set $Z\coloneqq\bigcup_n$
