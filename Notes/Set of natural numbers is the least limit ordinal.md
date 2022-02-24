<br />
<br />

Date Created: 02/02/2022 15:26:20
Tags: #Proposition #Closed 

Proved by: [[Natural numbers form an initial segment of ON]], [[Initial segment of ON is an ordinal]], [[ON is well-ordered by membership]], [[Successor of natural number is a natural number]]
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The set of natural numbers $\omega$ is a limit ordinal whose elements are not limit ordinals._

```

_Proof_. Firstly, $\omega$ is an ordinal since it is an initial segment of $\ord$ and initial segments of $\ord$ are ordinals. We now need to show that $\omega\neq\em$ and that $\omega$ is not a successor ordinal.
* Since $\em\in\omega$, it cannot be the case that $\em=\omega$ for then $\omega\in\omega$, contradicting the fact that $\in$ is irreflexive on $\ord$.

* If there exists an ordinal $\alpha$ such that $\omega=S\l(\alpha\r)$, then, since $\alpha\in S\l(\alpha\r)=\omega$, we see that $\alpha$ is a natural number. It follows that $\omega=S\l(\alpha\r)$ is a natural number and thus $\omega\in\omega$, contradicting that fact that $\in$ is irreflexive on $\ord$.

Finally, elements of $\omega$ are natural numbers which, by definition, are not limit ordinals.<span style="float:right;">$\blacksquare$</span>
