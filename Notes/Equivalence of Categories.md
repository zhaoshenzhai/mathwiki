<div class="topSpace"></div>

Date Created: 02/09/2023 15:11:00
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: [[Dual Space]], [[Complex representations equivalent to finitely-generated modules over group algebra]], [[Finitely-generated Module#^equivalence-fg-vector-spaces-and-dimension]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Two categories $C$ and $D$ are said to be <b>equivalent</b> if there are functors $F:C\to D$ and $G:D\to C$ such that $G\circ F\iso1_C$ and $F\circ G\iso1_D$.

```

<b>Remark.</b> It is a fact that $F:C\to D$ is an equivalence of categories iff $F$ is fully-faithful and essentially surjective. <span style="color:pink">fix this.</span>
* ($\Rightarrow$): Suppose that $F$ is an equivalence and let $G:D\to C$ be such that $G\circ F\iso1_C$ and $F\circ G\iso1_D$, so there are natural isomorphisms $\eta\coloneqq\Aut_C\!\l(GF\slot,\slot\r)$ and $\nu\coloneqq\Aut_D\!\l(\slot,FG\slot\r)$. Every $B\in\Obj\l(D\r)$ is such that $F\l(GD\r)\iso D$, so $F$ is essentially surjective. If $Ff_1=Ff_2$ for $f_1,f_2\in\Hom_C\!\l(A,A'\r)$, then $GFf_1=GFf_2$ and hence $f_1\circ\eta_A=\eta_{A'}\circ GFf_1=\eta_{A'}\circ GFf_2=f'\circ\eta_A$. Thus $f_1=f_2$, showing that $F$ is faithful too. Finally, to show that $F$ is essentially surjective, take $g\in\Hom_D\!\l(FA,FA'\r)$. Consider the map $f\coloneqq\eta_{A'}\circ Gg\circ\eta_A^{-1}:A\to A'$. Then $G\l(Ff\r)=\eta_{A'}^{-1}\circ f\circ\eta_A=Gg$, and since $G$ is also an equivalence which was proven to be faithful, we see that $Ff=g$.
* ($\Leftarrow$): Let $F$ be a fully-faithful essentially surjective functor. Take $B\in\Obj\l(D\r)$, so there is an object $A\in\Obj\l(C\r)$ and an isomorphism $\nu_B\in\Aut_D\!\l(B,FA\r)$. Set $GB\coloneqq A$, so $\nu_B\in\Aut_D\!\l(B,FGB\r)$. Take $g\in\Hom_D\!\l(B,B'\r)$, so $\nu_{B'}\circ g\circ\nu_B^{-1}:F\l(GB\r)\to F\l(GB\r)$, so there is a unique morphism $f:GB\to GB'$ such that $Ff=\nu_{B'}\circ g\circ\nu_B^{-1}$. Set $Gg\coloneqq f$. Note that this makes $\nu\coloneqq\Aut_D\!\l(\slot,FG\slot\r)$ a natural isomorphism, so $G:D\to C$ is a functor with $F\circ G\iso1_D$. It remains to show that $G\circ F\iso1_C$, for which we observe that $\nu_{FA}^{-1}:F\l(GFA\r)\to FA$ induces a unique morphism $\eta_A\in\Hom_C\!\l(GFA,A\r)$ such that $F\eta_A=\nu_{FA}^{-1}$. Similarly for $\nu_{FA}$, which induces the inverse $\eta_A^{-1}$. Take $f\in\Hom_C\!\l(A,A'\r)$, so $F\l(f\circ\eta_A\r)=Ff\circ\nu_{FA}^{-1}$ and $F\l(\eta_{A'}\circ GFf\r)=\nu_{FA'}^{-1}\circ FGFf$. That they coincide follows from the definition of $G$, so the result follows by faithfulness of $F$.

There is a more restriction notion of an <i>isomorphism of categories</i>, where we require that $G\circ F=1_C$ and $F\circ G=1_D$.<span style="float:right;">$\blacklozenge$</span>
