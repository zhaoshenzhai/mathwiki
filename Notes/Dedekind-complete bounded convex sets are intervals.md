<br />
<br />

Date Created: 18/02/2022 09:02:40
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: [[Rational convex set (not interval)]], [[Lexicographical plane convex set (not interval)]]

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,<\r\rangle$ be a totally ordered set and fix a Dedekind-complete bounded convex subset $Y\subseteq X$. Then $Y$ can be written in the form of an interval in $X$._

```

_Proof_. If $Y=\em$, then $Y=\l(x,x\r)_X$ for any $x\in X$. Assume otherwise, so, since $Y$ is bounded and Dedekind-complete, we see that $\inf Y$ and $\sup Y$ exist and are in $Y$. We claim that either $Y=\l(\inf Y,\sup Y\r)$, $Y=\l[\inf Y,\sup Y\r)$, $Y=\l(\inf Y,\sup Y\r]$, or $Y=\l[\inf Y,\sup Y\r]$.
* ($\subseteq$): Take $y\in Y$. Since $\inf Y$ and $\sup Y$ are lower and upper bounds of $Y$, respectively, we see that $\inf Y\leq y\leq\sup Y$ and thus $y\in\l[\inf Y,\sup Y\r]$. If one/both non-strict inequalities are strict, then $y$ is in some other interval variant.

* ($\supseteq$): Take $y\in\l(\inf Y,\sup Y\r)$, so $\inf Y<\sup Y$. Since $Y$ is convex, we see that $\l(\inf Y,\sup Y\r)\subseteq Y$ and thus $y\in Y$. Since $\inf Y,\sup Y\in Y$, the other cases for when $y=\inf Y$ or $y=\sup Y$ are covered too.<span style="float:right;">$\blacksquare$</span>
