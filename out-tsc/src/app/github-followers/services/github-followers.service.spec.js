import { TestBed } from '@angular/core/testing';
import { GithubFollowersService } from './github-followers.service';
describe('GithubFollowersService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GithubFollowersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=github-followers.service.spec.js.map