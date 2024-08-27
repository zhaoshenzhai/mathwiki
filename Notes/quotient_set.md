---
title: Quotient Set
date: 2024-06-11T21:27:54-04:00
references: [Alu09]
tags: [Set_Theory]
---

# Motivation & Definition

## Universal Property

Fix an {{< link file="equivalence_relation" display="equivalence relation" type="references" >}} $E$ on $X$. We would like to construct a set $X/E$ and a function $\pi:X\to X/E$ in which ‘$E$ becomes equality’ via $\pi$. Moreover, this construction needs to be {{< link file="universal_constructions" display="universal" type="references" >}}, in the precise sense that:

>For any set $Z$ and any function $f:X\to Z$ such that $xEy$ implies $f(x)=f(y)$ for all $x,y\in X$, there is a unique function $f':X/E\to Z$ such that $f=f'\circ\pi$.

More abstractly, we need $(X/E,\pi)$ to be initial in the coslice category $(Z,f:X\to Z)$ making $f(x)=f(y)$ whenever $xEy$. This can be realized by the following

{{< env type="definition" >}}

Let $E$ be an equivalence relation on a set $X$. The *quotient set* of $X$ by $E$ is the set $X/E\coloneqq\l\\{[x]_E\st x\in X\r\\}$ of all equivalence classes of $X$.

{{< /env >}}

{{< env type="proof" name="of the universal property" >}}

Let $(Z,f)$ be as above. For a function $f':X/E\to Z$ with $f=f'\circ\pi$, we need $f'([x]_E)=f(x)$ for all $x\in X$, so uniqueness of $f'$ follows. For existence, we need to show that $f'$ is well-defined, but this is precisely the condition that $f(x)=f(y)$ whenever $xEy$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

**Remark.** In light of this universal property, we do not really care about the quotient *set* $X/E$. Rather, we care about the *function* $\pi:X\to X/E$, which is surjective, and is called the *canonical projection*.

<div class="space"></div>

## Canonical Decomposition

Let $f:X\to Y$ be a function and let $E_f\subseteq X^2$ be the equivalence on $X$ defined by $xE_fx'$ iff $f(x)=f(x')$.

{{< env type="theorem" >}}

We have a unique isomorphism $X/E_f\iso\im f$, and so $f$ factors as

{{< tikz name="canonical_decomposition" width="400" >}}
\begin{equation*}
    \begin{tikzcd}
        X \ar[r, "\pi", twoheadrightarrow] & X/E_f \ar[r, "\sim", leftrightarrow] & \im f \ar[r, "\iota", hookrightarrow] & Y.
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

{{< /env >}}

{{< env type="proof" hide="true" >}}

Restricting the codomain of $f$, we obtain a surjection $f_0:X\onto\im f$. It suffices to show that $f_0$ satisfies the same universal property as $\pi$, for then $X/E_f\iso\im f$ and we obtain the desired decomposition of $f$.

<br>

&emsp;&emsp;Indeed, if $(Z,g)$ respects $E_f$, then any $g':\im f\to Z$ with $g=g'\circ f_0$ is forced to have $g'(f(x))=g(x)$ for all $x$, so uniqueness follows. For existence, let $y\in\im f$, so $y=f(x)$ for some $x\in X$. Set $g'(y)\coloneqq g(x)$, which is well-defined since if $y=f(x')$ for $x'\in X$, then $f(x)=f(x')$ and hence $xE_fx'$. Thus $g(x)=g(x')$, as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Set-theoretic Aspects
