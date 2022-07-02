---
custom_alias: Solutions of $A\v{x}=\v{b}$ decompose as $\l\{\v{s}_p\r\}+\nullsp A$ for any $A\v{s}_p=\v{b}$
---

<br />
<br />

Date Created: 01/04/2022 17:36:28
Tags: #Proposition #Closed

Proved by: [[Basic properties of matrix operations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider any consistent $m\times n$-linear system $A\v{x}=\v{b}$. Letting $S\coloneqq\l\{\v{s}\in K^n:A\v{s}=\v{b}\r\}$, we have_
$$\begin{equation}
    S=\l\{\v{s}_p\r\}+\nullsp A
\end{equation}$$
_for any $\v{s}_p\in S$. In other words, given a **particular solution** $\v{s}_p\in S$, every solution $\v{s}\in S$ can be expressed as a sum $\v{s}_p+\v{s}_0$ for some $\v{s}_0\in\nullsp A$._

```

_Proof_. Fix any $\v{s}_p\in S$.
* ($\subseteq$): Take $\v{s}\in S$, so $A\v{s}=\v{b}$. Observe then that
$$\begin{equation}
    A\l(\v{s}-\v{s}_p\r)=A\v{s}-A\v{s}_p=\v{b}-\v{b}=\v{0},
\end{equation}$$
so $\v{s}-\v{s}_p\in\nullsp A$. Set $\v{s}_0\coloneqq\v{s}-\v{s}_p\in\nullsp A$, so $\v{s}=\v{s}_p+\v{s}_0$ and thus $S\subseteq\l\{\v{s}_p\r\}+\nullsp A$.

* ($\supseteq$): Take $\v{s}\in\l\{\v{s}_p\r\}+\nullsp A$, so $\v{s}=\v{s}_p+\v{s}_0$ for some $\v{s}_0\in\nullsp A$. But then
$$\begin{equation}
    A\v{s}=A\l(\v{s}_p+\v{s}_0\r)=A\v{s}_p+A\v{s}_0=\v{b}+\v{0}=\v{b},
\end{equation}$$
so $\v{s}\in S$ and thus $\l\{\v{s}_p\r\}+\nullsp A\subseteq S$.<span style="float:right;">$\blacksquare$</span>
