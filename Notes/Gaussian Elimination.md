<br />
<br />

Date Created: 24/03/2022 14:51:51
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Gaussian Elimination).

_Let $K$ be a field and fix $m,n\in\R$. Then every matrix $\v{M}\in\mat{m\times n}{K}$ is row-equivalent to a matrix $\v{R}\in\mat{m\times n}{K}$ in row-echelon form._

```

_Proof_. We shall algorithmically construct $\v{R}$ from $\v{M}$. Assume, w.l.o.g, that $\v{M}$ has $r$ non-zero rows.
* Step 1: If $r=0$, stop, since $\v{M}$ is already in row-echelon form.

* Step 2: For all $i\in\l\{1,\dots,r\r\}$, let $k_i\coloneqq\min\l\{j\in\l\{1,\dots n\r\}\mid M_{ij}\neq0\r\}$. Consider any row $l$ such that $k\coloneqq k_l\leq k_i$ for all $i\in\l\{1,\dots,r\r\}$; that is, consider any row whose leading entry occurs at the leftmost column. Perform the elementary row operation
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_185733/image.svg", width=600></center>
  which moves said row to the top; all zero-rows at the bottom are omitted.
* Step 3: Divide out the leading entry by performing the elementary row operation
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_201822
/image.svg", width=600></center>
* Step 4: To replace all with red entries with $0$, perform the elementary row operations
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_203210/image.svg", width=750></center>
