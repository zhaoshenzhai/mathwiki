<div class="topSpace"></div>

Date Created: 18/02/2022 09:02:40
Tags: #Proposition #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,<}$ be a totally ordered set and fix a Dedekind-complete bounded convex subset $Y\subseteq X$. Then $Y$ can be written in the form of an interval in $X$._

```

_Proof_. If $Y=\em$, then $Y=\l(x,x\r)_X$ for any $x\in X$. Assume otherwise, so, since $X$ is Dedekind-complement and $Y$ is bounded, we see that $\alpha\coloneqq\inf Y$ and $\beta\coloneqq\sup Y$ exist. It suffices to show that $\l(\alpha,\beta\r)\subseteq Y$, for then either $Y=\l(\alpha,\beta\r)$, $Y=\l[\alpha,\beta\r)$, $Y=\l(\alpha,\beta\r]$, or $Y=\l[\alpha,\beta\r]$.
* ($\subseteq$): Take $y\in\l(\alpha,\beta\r)$. Since $\beta=\sup Y$ and $y<\beta$, we see that $y$ is not an upper bound of $Y$ and hence there exists some $z\in Y$ such that $y<z$. Similarly, there exists some $x\in Y$ such that $x<y$. Since $Y$ is convex, we see that $\l(x,z\r)\subseteq Y$ and hence $y\in Y$.<span style="float:right;">$\blacksquare$</span>
