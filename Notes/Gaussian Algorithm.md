<br />
<br />

Date Created: 24/03/2022 14:51:51
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Gaussian Algorithm).

_Let $K$ be a field and fix $m,n\in\R$. Then every matrix $A\in\mat{m\times n}{K}$ is row-equivalent to a matrix $R\in\mat{m\times n}{K}$ in row-echelon form._

```

_Proof_. We shall algorithmically construct $R$ from $A$.
* Step 1: If $A=\v{0}$ is the $m\times n$ zero matrix, stop, since $\v{0}$ is in row-echelon form.

* Step 2: For all $i\in\l\{1,\dots,m\r\}$, let $k_i\coloneqq\min\l\{j\in\l\{1,\dots n\r\}\mid a_{ij}\neq0\r\}$ be the column with its leading entry. Consider any row $l$ such that $k\coloneqq k_l\leq k_i$ for all $i\in\l\{1,\dots,r\r\}$; that is, consider any row whose leading entry occurs at the leftmost column. Perform the elementary row operation
<br>
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_185733/image.svg", width=600></center>
<br>
  which moves said row to the top.
* Step 3: Divide out the leading entry by performing the elementary row operation
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_201822
/image.svg", width=600></center>
* Step 4: To replace all with red entries with $0$, perform the elementary row operations
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-24_203210/image.svg", width=600></center>

  for all $i\in\l\{2,\dots,r\r\}$.
* Step 5: Let $A'$ be the matrix after Step 4 and let $A_g$ be the green $\textrm{`}$submatrix$\textrm{'}$ shown above; that is, let $A_g\coloneqq\l\langle m-1,n-k,f_g\r\rangle$ where
$$\begin{equation}
    \begin{aligned}
        f_g:\l\{1,\dots,m-1\r\}\times\l\{1,\dots,n-k\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto f'\l(1+i,k+j\r)
    \end{aligned}
\end{equation}$$
and $f'$ is the function defining $A'$. If $m=1$, stop, since $A_g$ is empty. Otherwise, repeat steps 1 to 5 with $A_g$ (still embedded within $A'$) in place of $A$, by which we mean apply all the elementary row operations in each step to $A_g$ and then substituting all the changes made into $A'$; observe that these elementary row operations will only affect entries in green, so, in particular, every column before and including the $k^\textrm{th}$ column will not be affected.

This process terminates since the number of columns of $A_g$ is at most $n-1$, where $n$ is the number of columns of $A$. Therefore, Step 5 cannot occur more than $n$ times. Let $R$ be the resulting matrix at any stopping condition. Since only elementary row operations were used to obtain $R$, we see that $R\sim A$.<span style="float:right;">$\blacksquare$</span>
