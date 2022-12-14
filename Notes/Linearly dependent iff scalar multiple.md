---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/04/2022 22:50:37
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: [[Linearly dependent iff exists span redundant element]]

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a vector space $V$ over $K$. Then the vectors $v_1,v_2\in V$ are linearly dependent iff one is a scalar multiple of the other._

```

_Proof_.
* ($\Rightarrow$): Since $v_1$ and $v_2$ are linearly dependent, there exist $\alpha_1,\alpha_2\in K$, at least one of which is non-zero, such that $\alpha_1v_1+\alpha_2v_2=0_V$.
    * If $\alpha_1\neq0$, then $v_1=-\frac{\alpha_2}{\alpha_1}v_2$.
    * If $\alpha_2\neq0$, then $v_2=-\frac{\alpha_1}{\alpha_2}v_1$.

* ($\Leftarrow$): Let $v_1=\alpha v_2$ for some $\alpha\in K$ (which may vanish), and observe that
$$\begin{equation}
    1v_1-\alpha v_2=0_V.
\end{equation}$$
Thus there exists a non-trivial linear combination of $v_1$ and $v_2$ that vanishes, so $v_1$ and $v_2$ are linear independent.<span style="float:right;">$\blacksquare$</span>
