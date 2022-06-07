<br />
<br />

Date Created: 24/03/2022 14:51:51
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Gaussian Algorithm).

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then every matrix $A\in\mat{m\times n}{K}$ is row-equivalent to a matrix $R\in\mat{m\times n}{K}$ in reduced row-echelon form (RREF)._

```

_Proof_. We shall algorithmically construct $R$ from $A$.
* _Step 1: (Create a leading 1 in the first row)$\bf{.}$_ If $A=0_{m\times n}$, stop. For all non-zero rows $i\in\l\{1,\dots,m\r\}$, let $k_i\coloneqq\min\l\{j\in\l\{1,\dots n\r\}\mid a_{ij}\neq0\r\}$ be the column with its leading entry. Let $l$ be any row such that $k\coloneqq k_l\leq k_i$ for all $i\in\l\{1,\dots,m\r\}$. Perform the type 3 elementary row operation
<br>
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_185733/image.svg", width=500></center>
<br>
which moves said row on top, followed by the type 1 elementary row operation
<br>
<br>
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_201822/image.svg", width=525></center>
<br>

* _Step 2: (Create zeros below the leading 1)$\bf{.}$_ This is done by performing the type 2 elementary row operations
<br>
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_203210/image.svg", width=525></center>
<br>

  for all $i\in\l\{2,\dots,m\r\}$.
* _Step 3: (Repeat for all green submatrices)$\bf{.}$_ Let $A'$ be the matrix obtained after Step 2 and let $A_g$ be the green $\textrm{`}$submatrix$\textrm{'}$ shown above; that is, let $A_g$ be the $m_g\times n_g$ matrix defined, formally, as
$$\begin{equation}
    A_g:\l\{1,\dots,m_g\r\}\times\l\{1,\dots,n_g\r\}\to K\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \tpl{i,j}\mapsto a'_{1+i,k+j}
\end{equation}$$
where $m_g\coloneqq m-1$ and $n_g\coloneqq n-k$. If $m_g\neq0$, repeat steps 1 and 2 with $A_g$, $m_g$, and $n_g$ in place of $A$, $m$, and $n$, respectively; note that all the elementary row operations performed in those steps do not affect any of the columns preceding and including $k$. Otherwise, move on to Step 4; this stopping condition will always occur as $m_g$ strictly decreases after each loop.

Now that all zero-rows are at the bottom, they will not be typesetted. Similarly for all zero-columns on the left (not affected by any elementary row operations).
* _Step 4: (Create zeros above the last leading 1)$\bf{.}$_ Let $l$ be the last non-zero row of the resulting matrix $U$ and let $k$ be its corresponding pivot column. Perform the type 2 elementary row operation
<br>
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-06-07_044007/image.svg", width=750></center>
<br>

  for all $i\in\l\{1,\dots,l-1\r\}$ which creates zeros above the leading 1.

---

**Remark.** In summary:
* Steps 1 to 3 is the **forward pass** which ensures that all zero-rows are at the bottom and that the resulting matrix is in $\textrm{`}$staircase$\textrm{'}$ form.

* Steps 4 to **INSERT** is the **backward pass** which ensures that the only non-zero entry in each pivot column is its leading 1.<span style="float:right;">$\blacklozenge$</span>
