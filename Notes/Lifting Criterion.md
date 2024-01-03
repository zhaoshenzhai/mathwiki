<div class="topSpace"></div>

Date Created: 22/05/2023 23:14:21
References: #Ref/Hat02 #Ref/Lee10
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Homotopy Lifting Theorem]], [[Covering Space#^pi-injectivity-and-loops]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lifting Criterion).

Let $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ be a continuous map between pointed topological spaces and let $p:(E,e_0)\to\tpl{X,x_0}$ be a covering map. If $Y$ is connected and locally path-connected, then there exists a lift $\widetilde{f}:\tpl{Y,y_0}\to(E,e_0)$ of $f$ iff $f_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(E,e_0)$, in which case the lift is unique.
![[Images/2023-05-22_233431/image.svg|150]]

```

<b>Remark.</b> In particular, if $Y$ is simply-connected, then such a lift always exists. If on the other hand $E$ is simply-connected, then such a lift exists iff $p_\ast$ is trivial.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If such a lift exists, then $p_\ast\circ\widetilde{f}_\ast=(p\circ\widetilde{f})_\ast=f_\ast$ and thus $f_\ast\pi_1\!\l(Y,y_0\r)=p_\ast\widetilde{f}_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(E,e_0)$. For the converse, let $y\in Y$ and let $\gamma:y_0\pathto y$, so $f_\ast\gamma$ is a path starting at $x_0$ which has a unique lift $\widetilde{f_\ast\gamma}$ starting at $e_0$. Define $\widetilde{f}\l(y\r)\coloneqq\widetilde{f_\ast\gamma}\l(1\r)$, so $(p\circ\widetilde{f})\l(y\r)=p\circ\widetilde{f_\ast\gamma}\l(1\r)=\l(f_\ast\gamma\r)\l(1\r)=f\l(y\r)$ as desired. To see that this is well-defined, let $\delta:y_0\pathto y$ be another path, so $\gamma\ast\delta^-\in\pi_1\!\l(Y,y_0\r)$. Thus $\sigma\coloneqq f_\ast\!\l(\gamma\ast\delta^-\r)\in f_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(E,e_0)$, so the lift $\widetilde{\sigma}$ is a loop at $e_0$. A computation gives $f_\ast\gamma\htopeq\l(p_\ast\widetilde{\sigma}\r)\ast\l(f_\ast\delta\r)=p_\ast(\widetilde{\sigma}\ast\widetilde{f_\ast\delta})$, so by the uniqueness of liftings, we have $\widetilde{f_\ast\gamma}\htopeq\widetilde{\sigma}\ast\widetilde{f_\ast\delta}$ and thus the liftings $\widetilde{f_\ast\gamma}$ and $\widetilde{f_\ast\delta}$ coincide at $1$, as desired.
![[Images/2023-05-23_164130/image.svg|300]] It remains to show that $\widetilde{f}$ is continuous, so let $y\in Y$, $x\coloneqq f\l(y\r)$, $e\coloneqq\widetilde{f}\l(y\r)$, and let $\widetilde{U}_0$ be a neighborhood of $e$. For an evenly-covered neighborhood $U$ of $x$, let $\widetilde{U}_e$ denote the sheet above $U$ containing $e$. Set $\widetilde{U}\coloneqq \widetilde{U}_0\cap \widetilde{U}_e$, so $p$ is a homeomorphism when restricted to $\widetilde{U}$. Thus $p\,(\widetilde{U})$ is open, so by continuity $f^{-1}(p\,(\widetilde{U}))$ is open too. By local path-connectedness of $Y$, this set contains a path-connected neighborhood $W$ of $y$. We claim that $\widetilde{f}\l(W\r)\subseteq \widetilde{U}$, so take $w\in W$ and let $\sigma$ be a path from $y$ to $w$ contained in $W$. Then $f_\ast\sigma$ is a path in $f\l(W\r)\subseteq p\,(\widetilde{U})$ starting at $x$, which lifts to a path $\widetilde{f_\ast\sigma}$ in $\widetilde{U}$ starting at $e$. But since the end point of $\widetilde{f_\ast\gamma}$ constructed above is $e=\widetilde{f}\l(y\r)$, the concatenation of $\widetilde{f_\ast\gamma}\ast\widetilde{f_\ast\sigma}$ is well-defined and is a path starting at $e_0$. This path lifts $f_\ast\!\l(\gamma\ast\sigma\r)$, and since $\gamma\ast\sigma$ is a path from $y_0$ to $w$, we see that $\widetilde{f}\l(w\r)$ is the end point of $\widetilde{f_\ast\gamma}\ast\widetilde{f_\ast\sigma}$. But this end point is $\widetilde{f}\l(y\r)=\widetilde{f_\ast\gamma}\l(1\r)$, which lies in $\widetilde{U}$.<span style="float:right;">$\blacksquare$</span>
