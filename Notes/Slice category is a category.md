<br />
<br />

Date Created: 25/02/2022 17:37:38
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow X\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $f,g,h\in\obj\l(\cat{C}\downarrow X\r)$ and consider the morphisms $\phi:\dom f\to\dom g$ and $\psi:\dom g\to\dom h$; we need to prove that the diagram
    <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/25-02-2022_175305/image.svg"></center>

    commutes.
