'use strict';

const expect = require('chai').expect;

const dataPath = '../lib/data.json';
const data = require(dataPath);

const davidBrent = require('../lib');

describe('David Brent', () => {

  const originalRandom = Math.random;

  before(() => {
    data.quotes = [
      `Has he passed his forklift driver's test?`,
      `He gives the tests!`
    ];
  });

  afterEach(() => {
    Math.random = originalRandom;
  });

  after(() => {
    delete require.cache[require.resolve(dataPath)];
  });

  describe('a chilled out entertainer function', () => {

    it('should return a random quote', () => {
      Math.random = () => 0.1;
      expect(davidBrent()).to.equal(`Has he passed his forklift driver's test?`);

      Math.random = () => 0.9;
      expect(davidBrent()).to.equal(`He gives the tests!`);
    });

  });

  describe('mused', () => {

    const prefix = `Brent mused, and then replied;`;

    it('should reply with the provided string', () => {
      const musing = 'Is it difficult to remain authoritative and yet so popular?';
      expect(davidBrent.mused(musing)).to.equal(`${prefix} ${musing}`);
    });

    it('should reply with a random quote', () => {
      Math.random = () => 0.1;
      expect(davidBrent.mused()).to.equal(`${prefix} Has he passed his forklift driver's test?`);
    });

  });

  describe('quipped', () => {

    const prefix = `David quipped;`;

    it('should reply with the provided string', () => {
      const quip = 'Why buy a book when you can join the library?';
      expect(davidBrent.quipped(quip)).to.equal(`${prefix} ${quip}`);
    });

    it('should reply with a random quote', () => {
      Math.random = () => 0.9;
      expect(davidBrent.quipped()).to.equal(`${prefix} He gives the tests!`);
    });

  });

  describe('meltingPot', () => {

    it('should return a random quote from the pot', () => {
	  davidBrent.meltingPot({
	  	stringsToBrentsBow: ['philanthropist', 'chilled out entertainer'],
	  	friendOrBoss: ['friend first', 'boss second', 'probably entertainer third']
	  });
	  Math.random = () => 0.1;
	  expect(davidBrent.stringsToBrentsBow()).to.equal(`philanthropist`);
	  expect(davidBrent.friendOrBoss()).to.equal(`friend first`);

	  Math.random = () => 0.9;
	  expect(davidBrent.stringsToBrentsBow()).to.equal(`chilled out entertainer`);
	  expect(davidBrent.friendOrBoss()).to.equal(`probably entertainer third`);

	  Math.random = () => 0.5;
	  expect(davidBrent.friendOrBoss()).to.equal(`boss second`);
    });

  });

});