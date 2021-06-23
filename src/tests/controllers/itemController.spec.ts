import sinon from 'sinon';
import { container } from 'tsyringe';
import request from 'supertest';
import ItemService from '../../services/itemService';
import ItemBuilder from '../testBuilders/ItemBuilder';
import app from '../../app';
describe('Item Route context', () => {
    const itemData = new ItemBuilder()
        .withDescription('Magic long sword')
        .withWeight(98)
        .withLevelRequired(150)
        .withVocation('Knight')
        .build();

    let itemServiceSpy: sinon.SinonStubbedInstance<ItemService>;

    beforeEach(() => {
        sinon.restore();
        itemServiceSpy = sinon.createStubInstance(ItemService);
    });

    it('should be call controller with item data and returns status 201', async () => {
        itemServiceSpy.create.resolves(<any>itemData);
        sinon.stub(container, 'resolve').returns(itemServiceSpy);

        const response = await request(app)
            .post('/api/v1/item')
            .send(itemData)
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
    });
});
