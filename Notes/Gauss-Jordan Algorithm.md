<br />
<br />

Date Created: 26/03/2022 14:21:31
Tags: #Proposition #Closed 

Proved by: [[Gaussian Algorithm]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then every matrix $A\in\mat{m\times n}{K}$ is row-equivalent to a matrix $R\in\mat{m\times n}{K}$ in reduced row-echelon form._

```

_Proof_. Let $A'\coloneqq\l(e_k\circ\cdots\circ e_1\r)\l(A\r)\sim A$ be the result of performing the Gaussian Algorithm on $A$, say with $r$ non-zero rows. To reduce this to RREF, we need the leading $1\textrm{'}$s in each row to be the only non-zero entry in its column. To this end, take $l\in\l\{1,\dots,r\r\}$ and let $k$ denote its pivot column. By $\axiref[3]$, all entries below $M'_{lk}$ are zero, so it suffices to perform the elementary row operations
$$\begin{equation}
    R_i-M'_{ik}R_l\to R_i
\end{equation}$$
for all $i\in\l\{1,\dots,l-1\r\}$, which makes all entries above $r_{lk}$ zero. It remains to show that these elementary row operations keep the matrix $A'$ in row-echelon form. To this end, observe that since $M'_{lj}=0$ for all $j<k$, these operations do not affect any entries $M'_{ij}$ for $j<k$.
* ($\axiref[1]$): All existing zero rows remain. To see that no zero-rows are created, observe that the leading $1\textrm{'}$s in row $i$ for $i<l$ occur at columns $k_i<k$ and are thus not affected. Incidentally, this also shows that $\axiref[2]$ and $\axiref[3]$ hold.

Thus if we perform the elementary row operations row by row starting from $l=1$ until $l=r$, we see that each set of elementary row operations performed do not affect the changes done by previous ones. Letting $R$ be the resulting matrix, we see that $R$ is in RREF and that $R\sim A'\sim A\Rightarrow R\sim A$ since only elementary row operations we used.<span style="float:right;">$\blacksquare$</span>
