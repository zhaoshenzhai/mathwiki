---
mathLink-blocks:
    differentiation: Differentiation of Borel measures on $\R^d$
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:00:03
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Theorem #Topic/Real_Analysis
^differentiation

Proved by: [[Approximation with continuous]], [[Chebyshev's Inequality]], [[Hardy-Littlewood Maximal Theorem]]
References: [[Lebesgue-Radon-Nikodym Theorem]]
Justifications: [[Regularity and Tightness]], [[Vitali Covering Lemma]], [[Real Numbers#^rationals-dense-in-reals]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lebesgue Differentiation Theorem).

For any locally-integrable function $f\in L^1_\textrm{loc}\!\l(\R^d,\lambda\r)$, we have $f\l(x\r)=\lim\limits_{r\to0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}f\,\d\lambda\eqqcolon\lim\limits_{r\to0}A_rf\l(x\r)$ for a.e. $x\in\R^d$.

```

<i>Proof.</i> Note that this statement is true for any continuous integrable function $g:\R^d\to\R$ since for any $\epsilon>0$ and any $x\in\R^d$, we have
$$\begin{equation}
    \l|A_rg\l(x\r)-g\l(x\r)\r|=\l|\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}g\l(y\r)\,\d\lambda\l(y\r)-g\l(x\r)\r|\leq\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|g\l(y\r)-g\l(x\r)\r|\,\d\lambda\l(y\r)<\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\epsilon\,\d\lambda\l(y\r)=\epsilon
\end{equation}$$
for small enough $r>0$, so $A_rg\l(x\r)\to g\l(x\r)$ as $r\to0$ for any $x\in\R^d$. In general, it suffices to show that for any $N\in\N$, we have $A_rf\l(x\r)\to f\l(x\r)$ for a.e. $x\in B_N\!\l(0\r)$. But for all $r\leq1$, we have $A_rf=A_r\!\l(f\cdot\cchi_{B_{N+1}\l(0\r)}\r)$ on $B_N\!\l(0\r)$, so we may w.l.o.g. assume that $f\in L^1$ by replacing $f$ with $f\cdot\cchi_{B_{N+1}\l(0\r)}$. Take $\delta>0$ and let $g\in L^1$ be a continuous function such that $\|f-g\|_1<\delta$. Let $Af\coloneqq\limsup_{r\to0}A_rf$ and consider the set $\Delta_\alpha\!\l(Af-f\r)\coloneqq\l\{x\in\R^d\st\l|Af\l(x\r)-f\l(x\r)\r|\geq\alpha\r\}$, for which we are done once we establish that $\lambda\l(\Delta_\alpha\!\l(Af-f\r)\r)=0$ for all $\alpha>0$. To this end, take $\epsilon>0$ and note that
$$\begin{equation}
    \l|Af\l(x\r)-f\l(x\r)\r|=\l|A\l(f-g\r)\l(x\r)+\l(Ag-g\r)\l(x\r)+\l(g-f\r)\l(x\r)\r|\leq H\l(f-g\r)\l(x\r)+0+\l|f-g\r|\l(x\r)
\end{equation}$$
where $H\l(f-g\r)$ is the Hardy-Littlewood maximal function of $f-g$. Thus $\Delta_\alpha\!\l(Af-f\r)\subseteq\Delta_{\alpha/2}\!\l(H\l(f-g\r)\r)\cup\Delta_{\alpha/2}\!\l(f-g\r)$, so we bound the terms individually. The second term can be bounded as $\lambda\l(\Delta_{\alpha/2}\!\l(f-g\r)\r)\leq2\|f-g\|_1/\alpha<2\delta/\alpha$ by Chebyshev’s Inequality. For the first, the Maximal Theorem gives us
$$\begin{equation}
    \lambda\l(\Delta_{\alpha/2}\!\l(H\l(f-g\r)\r)\r)\leq\frac{2C}{\alpha}\int\l|f-g\r|\d\lambda=\frac{2C}{\alpha}\|f-g\|_1<\frac{2C\delta}{\alpha}
\end{equation}$$
for some constant $C>0$, so $\lambda\l(\Delta_\alpha\!\l(Af-f\r)\r)\leq\frac{2\delta}{\alpha}\l(C+1\r)$. Letting $\delta\coloneqq\frac{\epsilon\alpha}{2\l(C+1\r)}$ gives the desired result.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> Translating this statement to Borel measures $\mu\abscont\lambda$ in $\R^d$, we need $\mu$ to be locally-finite in order for $\d\mu/\d\lambda$ to be locally-integrable. In this case, we have
$$\begin{equation}
    \frac{\d\mu}{\d\lambda}\l(x\r)=\lim_{r\to0}\frac{1}{\lambda\l(B_r\!\l(x\r)\r)}\int_{B_r\l(x\r)}\frac{\d\mu}{\d\lambda}\d\lambda=\lim_{r\to0}\frac{\mu\l(B_r\!\l(x\r)\r)}{\lambda\l(B_r\!\l(x\r)\r)}\cref{\ast}
\end{equation}$$
for $\lambda$-a.e. $x\in\R^d$ by the Lebesgue-Radon-Nikodym Theorem. Thus, for such measures, this theorem gives us an explicit way of computing the derivative $\d\mu/\d\lambda$. On the other hand, if $\mu\perp\lambda$, then we claim that the limit vanishes and so $\ref{\ast}$ holds for all measures after passing to its Lebesgue Decomposition.
* Indeed, let $\R^d=X_\mu\sqcup X_\lambda$ witness orthogonality and for each $\alpha>0$, let $Z_\alpha\coloneqq\l\{x\in X_\lambda\st\limsup_{r\to0}\frac{\mu\l(B_r\l(x\r)\r)}{\lambda\l(B_r\l(x\r)\r)}>\alpha\r\}$. It suffices to show that $\lambda\l(Z_\alpha\r)<\epsilon$ for all $\epsilon>0$. To this end, let $U\supseteq Z_\alpha$ be an open set with $\mu\l(U\r)<\epsilon$. For each $x\in Z_\alpha$, there is a ball $B_x\subseteq U$ centered at $x$ such that $\mu\l(B_x\r)>\alpha\lambda\l(B_x\r)$. Then $\l\{B_x\r\}_{x\in Z_\alpha}$ is a cover of $Z_\alpha$ with balls, so for every $c<\lambda\l(Z_\alpha\r)$, Vitali Covering furnishes pairwise-disjoint balls $B_{x_1},\dots,B_{x_k}$ such that $\sum_{i=1}^k\lambda\l(B_{x_i}\r)\geq c/3^d$. Observe that
$$\begin{equation}
    c\leq3^d\sum_{i=1}^k\lambda\l(B_{x_i}\r)<\frac{3^d}{\alpha}\sum_{i=1}^k\mu\l(B_x\r)\leq\frac{3^d}{\alpha}\mu\l(U\r)<\frac{3^d}{\alpha}\epsilon.
\end{equation}$$
Letting $c\to\lambda\l(Z_\alpha\r)$ gives us $\lambda\l(Z_\alpha\r)<3^d\epsilon/\alpha$, so $\lambda\l(Z_\alpha\r)=0$ as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We may replace the balls $\l\{B_r\!\l(x\r)\r\}_{r>0}$ in the theorem (and its corollaries) by any family $\{\widetilde{B}_r\!\l(x\r)\}$ of $\lambda$-measurable sets that <i>shrink-nicely</i> to $x$, i.e. any family such that there is some $p\in\l(0,1\r)$ where $\widetilde{B}_r\!\l(x\r)\subseteq B_r\!\l(x\r)$ and $\lambda\,(\widetilde{B}_r\!\l(x\r))\geq p\lambda\l(B_r\!\l(x\r)\r)$ for all $r>0$. To prove this, we first strengthen the classical version. Indeed, we claim that $\lim_{r\to0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|f\l(y\r)-f\l(x\r)\r|\,\d\lambda\l(y\r)=0$ for a.e. $x\in\R^d$. Take $\epsilon>0$. For each $q\in\Q$, we apply the above to the function $\l|f-q\r|$ so that
$$\begin{equation}
    \l|f\l(x\r)-q\r|=\lim_{r\to0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|f-q\r|\,\d\lambda
\end{equation}$$
for a.e. $x\in\R^d$, say for all $x\in\R^d\comp Z_q$. Set $Z\coloneqq\bigcup_{q\in\Q}Z_q$, which is $\lambda$-null, and for every $x\in\R^d\comp Z$, choose $q\in\Q$ so that $\l|f\l(x\r)-q\r|<\epsilon/2$. The claim then follows from the triangle inequality and the above. Finally, fix $x\in\R^d\comp Z$ and let $\{\widetilde{B}_r\!\l(x\r)\}_{r>0}$ be a family that shrink-nicely to $x$. The result then follows as
$$\begin{equation}
    \frac{1}{\lambda\,(\widetilde{B}_r\!\l(x\r))}\int_{\widetilde{B}_r\l(x\r)}\l|f\l(y\r)-f\l(x\r)\r|\,\d\lambda\l(y\r)\leq\frac{1}{p\lambda\l(B_r\!\l(x\r)\r)}\int_{B_r\l(x\r)}\l|f\l(y\r)-f\l(x\r)\r|\,\d\lambda\l(y\r)\to0.\exqedin
\end{equation}$$
