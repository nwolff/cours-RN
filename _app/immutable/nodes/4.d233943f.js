import{_ as ft}from"../chunks/preload-helper.41c905a7.js";import{S as ht,i as pt,s as mt,e as ct,b as dt,d as X,f as _t,g as Y,h as i,D as bt,o as vt,v as wt,k as u,q as b,a as x,l as d,m as f,r as v,c as E,n as F,C as e,J as gt,I,y as yt,z as St,A as xt,B as Et}from"../chunks/index.2f543cb9.js";import{b as kt,m as lt,g as Tt,t as ut}from"../chunks/stores.43a38518.js";import{W as Mt}from"../chunks/ArrowUp.svelte_svelte_type_style_lang.b6a07f07.js";const Ct=!1,$t=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ct},Symbol.toStringTag,{value:"Module"}));function Dt(w){let t,n,a,h,c,r,g,s,o,p,k,y,L,$,l,T,z,N,m,q,H,O,M,j,W,P,C,Z,R,D,U,V,J;return{c(){t=u("article"),n=u("h1"),a=b("Visualizing training with tfjs-vis"),h=x(),c=u("section"),r=u("h2"),g=b("Training Our Model"),s=x(),o=u("p"),p=b(`Our goal is to train a model to recognize similar digits. We have already written a tutorial
				on how to do so. So in this article we are going to focus on monitoring that training and
				also look at how well our model performs.`),k=x(),y=u("button"),L=b("Start training"),$=x(),l=u("section"),T=u("h2"),z=b("Evaluating Our Model"),N=x(),m=u("p"),q=b("Now that our model is trained we should evalute its performance. For a classification task\n				like this one we can use the `perClassAccuracy` and `confusionMatrix` functions. These are\n				demonstrated below."),H=x(),O=u("p"),M=u("button"),j=b("Show per-class accuracy"),W=x(),P=u("p"),C=u("button"),Z=b("Show confusion matrix"),R=x(),D=u("script"),U=b(`{
					const classNames = [
						'Zero',
						'One',
						'Two',
						'Three',
						'Four',
						'Five',
						'Six',
						'Seven',
						'Eight',
						'Nine'
					];

					function doPrediction(testDataSize = 500) {
						const testData = data.nextTestBatch(testDataSize);
						const testxs = testData.xs.reshape([testDataSize, 28 * 28, 1]);
						const labels = testData.labels.argMax([-1]);
						const preds = model.predict(testxs).argMax([-1]);

						testxs.dispose();
						return [preds, labels];
					}

					async function showAccuracy() {
						const [preds, labels] = doPrediction();
						const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
						const container = { name: 'Accuracy', tab: 'Evaluation' };
						tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

						labels.dispose();
					}

					async function showConfusion() {
						const [preds, labels] = doPrediction();
						const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
						const container = { name: 'Confusion Matrix', tab: 'Evaluation' };
						tfvis.render.confusionMatrix(container, {
							values: confusionMatrix,
							tickLabels: classNames
						});

						labels.dispose();
					}

					document.querySelector('#show-accuracy').addEventListener('click', () => showAccuracy());

					document
						.querySelector('#show-confusion')
						.addEventListener('click', () => showConfusion());
				}`),this.h()},l(B){t=d(B,"ARTICLE",{});var S=f(t);n=d(S,"H1",{});var G=f(n);a=v(G,"Visualizing training with tfjs-vis"),G.forEach(i),h=E(S),c=d(S,"SECTION",{});var A=f(c);r=d(A,"H2",{});var K=f(r);g=v(K,"Training Our Model"),K.forEach(i),s=E(A),o=d(A,"P",{});var Q=f(o);p=v(Q,`Our goal is to train a model to recognize similar digits. We have already written a tutorial
				on how to do so. So in this article we are going to focus on monitoring that training and
				also look at how well our model performs.`),Q.forEach(i),k=E(A),y=d(A,"BUTTON",{id:!0});var tt=f(y);L=v(tt,"Start training"),tt.forEach(i),A.forEach(i),$=E(S),l=d(S,"SECTION",{});var _=f(l);T=d(_,"H2",{});var et=f(T);z=v(et,"Evaluating Our Model"),et.forEach(i),N=E(_),m=d(_,"P",{});var nt=f(m);q=v(nt,"Now that our model is trained we should evalute its performance. For a classification task\n				like this one we can use the `perClassAccuracy` and `confusionMatrix` functions. These are\n				demonstrated below."),nt.forEach(i),H=E(_),O=d(_,"P",{});var at=f(O);M=d(at,"BUTTON",{id:!0});var st=f(M);j=v(st,"Show per-class accuracy"),st.forEach(i),at.forEach(i),W=E(_),P=d(_,"P",{});var ot=f(P);C=d(ot,"BUTTON",{id:!0});var rt=f(C);Z=v(rt,"Show confusion matrix"),rt.forEach(i),ot.forEach(i),R=E(_),D=d(_,"SCRIPT",{class:!0});var it=f(D);U=v(it,`{
					const classNames = [
						'Zero',
						'One',
						'Two',
						'Three',
						'Four',
						'Five',
						'Six',
						'Seven',
						'Eight',
						'Nine'
					];

					function doPrediction(testDataSize = 500) {
						const testData = data.nextTestBatch(testDataSize);
						const testxs = testData.xs.reshape([testDataSize, 28 * 28, 1]);
						const labels = testData.labels.argMax([-1]);
						const preds = model.predict(testxs).argMax([-1]);

						testxs.dispose();
						return [preds, labels];
					}

					async function showAccuracy() {
						const [preds, labels] = doPrediction();
						const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
						const container = { name: 'Accuracy', tab: 'Evaluation' };
						tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

						labels.dispose();
					}

					async function showConfusion() {
						const [preds, labels] = doPrediction();
						const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
						const container = { name: 'Confusion Matrix', tab: 'Evaluation' };
						tfvis.render.confusionMatrix(container, {
							values: confusionMatrix,
							tickLabels: classNames
						});

						labels.dispose();
					}

					document.querySelector('#show-accuracy').addEventListener('click', () => showAccuracy());

					document
						.querySelector('#show-confusion')
						.addEventListener('click', () => showConfusion());
				}`),it.forEach(i),_.forEach(i),S.forEach(i),this.h()},h(){F(y,"id","start-training"),F(M,"id","show-accuracy"),F(C,"id","show-confusion"),F(D,"class","show-script")},m(B,S){dt(B,t,S),e(t,n),e(n,a),e(t,h),e(t,c),e(c,r),e(r,g),e(c,s),e(c,o),e(o,p),e(c,k),e(c,y),e(y,L),e(t,$),e(t,l),e(l,T),e(T,z),e(l,N),e(l,m),e(m,q),e(l,H),e(l,O),e(O,M),e(M,j),e(l,W),e(l,P),e(P,C),e(C,Z),e(l,R),e(l,D),e(D,U),V||(J=gt(y,"click",w[1]),V=!0)},p:I,i:I,o:I,d(B){B&&i(t),V=!1,J()}}}function At(w){let t,n;return t=new Mt({props:{size:"100",color:"#FF3E00",unit:"px"}}),{c(){yt(t.$$.fragment)},l(a){St(t.$$.fragment,a)},m(a,h){xt(t,a,h),n=!0},p:I,i(a){n||(Y(t.$$.fragment,a),n=!0)},o(a){X(t.$$.fragment,a),n=!1},d(a){Et(t,a)}}}function zt(w){let t,n,a,h;const c=[At,Dt],r=[];function g(s,o){return s[0]?0:1}return t=g(w),n=r[t]=c[t](w),{c(){n.c(),a=ct()},l(s){n.l(s),a=ct()},m(s,o){r[t].m(s,o),dt(s,a,o),h=!0},p(s,[o]){let p=t;t=g(s),t===p?r[t].p(s,o):(wt(),X(r[p],1,1,()=>{r[p]=null}),_t(),n=r[t],n?n.p(s,o):(n=r[t]=c[t](s),n.c()),Y(n,1),n.m(a.parentNode,a))},i(s){h||(Y(n),h=!0)},o(s){X(n),h=!1},d(s){r[t].d(s),s&&i(a)}}}function Nt(w,t,n){let a;bt(w,lt,o=>n(4,a=o));let h,c=!0,r;vt(async()=>{r=await ft(()=>import("../chunks/index.cad12476.js").then(o=>o.i),["../chunks/index.cad12476.js","../chunks/stores.43a38518.js","../chunks/index.2f543cb9.js","../chunks/index.777404fd.js"],import.meta.url),kt.load().then(o=>{n(0,c=!1),h=o})});async function g(o,p,k){const[l,T]=ut(()=>{const m=p.nextTrainBatch(5e3);return[m.xs.reshape([5e3,784]),m.labels]}),[z,N]=ut(()=>{const m=p.nextTestBatch(1e3);return[m.xs.reshape([1e3,28*28]),m.labels]});return o.fit(l,T,{batchSize:64,validationData:[z,N],epochs:10,shuffle:!0,callbacks:k})}async function s(){lt.update(()=>Tt());const o=["loss","val_loss","acc","val_acc"],p={name:"show.fitCallbacks",tab:"Training",styles:{height:"1000px"}},k=r.show.fitCallbacks(p,o);return g(a,h,k)}return[c,s]}class Ft extends ht{constructor(t){super(),pt(this,t,Nt,zt,mt,{})}}export{Ft as component,$t as universal};
